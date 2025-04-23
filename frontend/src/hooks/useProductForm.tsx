import { AxiosError } from "axios";
import { useActionState, useEffect } from "react";

import API from "@/utils/api";
import { FormState, Product } from "@/utils/types";
import { toast } from "react-toastify";

const initialState: FormState = {};

export const useProductForm = (onCreate: (product: Product) => void) => {
  const submitForm = async (
    _: FormState,
    formData: FormData
  ): Promise<FormState> => {
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;

    if (!name || !price) return { error: "Missing Fields!" };
    const product = {
      name: name.trim().toLowerCase(),
      price: Number(price),
    };

    await onCreate(product);

    try {
      const response = await API.post("/api/v1/products/add", { name, price });

      return { success: response.data.message };
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return { error: err?.response?.data?.message || "Something went wrong." };
    }
  };

  const [productState, productAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  useEffect(() => {
    if (productState.success) {
      toast.success(productState.success);
    } else if (productState.error) {
      toast.success(productState.error);
    }
  }, [productState]);

  return { productAction, productState, isPending };
};
