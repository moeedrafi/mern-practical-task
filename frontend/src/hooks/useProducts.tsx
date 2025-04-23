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
    const res = await API.get("/api/products");
    setProducts(res.data.data);
  };

  const createProduct = async (newProduct: Product) => {
    addOptimisticProduct(newProduct);

    try {
      await API.post("/api/products", newProduct);
      fetchProducts();
    } catch (err) {
      console.error("Failed to create product", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { optimisticProducts, createProduct };
};
