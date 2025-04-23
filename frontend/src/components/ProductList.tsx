import { useProducts } from "@/hooks/useProducts";

export const ProductList = () => {
  const { formState, getProducts, isLoading, products } = useProducts();

  return (
    <div className="bg-white p-4 rounded-lg w-1/2 md:w-1/4 shadow-md border border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-5">Product List</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : formState.error ? (
        <p className="text-red-500">{formState.error}</p>
      ) : (
        <>
          {products.length > 0 ? (
            <div className="flex justify-between space-y-4">
              <p>Product Name</p>
              <p>Product Price</p>
            </div>
          ) : (
            <p>No products found!</p>
          )}
        </>
      )}
    </div>
  );
};
