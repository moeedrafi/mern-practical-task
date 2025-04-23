import { AxiosError } from "axios";
import { useActionState, useEffect } from "react";

import API from "@/utils/api";
import { FormState } from "@/utils/types";

const initialState: FormState = {};

export const useProductForm = () => {
  const submitForm = async (
    _: FormState,
    formData: FormData
  ): Promise<FormState> => {
    const name = formData.get("name");
    const price = formData.get("price");

    if (!name || !price) {
      return { error: "Missing Fields!" };
    }

    try {
      const response = await API.post("/api/v1/users/login", { name, price });

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
      console.log(productState.success);
    } else if (productState.error) {
      console.log(productState.error);
    }
  }, [productState]);

  return { productAction, productState, isPending };
};
