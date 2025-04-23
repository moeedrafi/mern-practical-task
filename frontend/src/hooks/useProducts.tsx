import API from "@/utils/api";
import { Product } from "@/utils/types";
import { useEffect, useOptimistic, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [optimisticProducts, addOptimisticProduct] = useOptimistic(
    products,
    (state, newProduct: Product) => [newProduct, ...state]
  );

  const fetchProducts = async () => {
    const res = await API.get("/api/v1/products");
    setProducts(res.data.data);
  };

  const createProduct = async (newProduct: Product) => {
    addOptimisticProduct(newProduct);

    try {
      const res = await API.get("/api/v1/products");
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProducts(res.data.data);
    } catch (err) {
      console.error("Failed to create product", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { optimisticProducts, createProduct };
};
