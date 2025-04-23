import { useProducts } from "@/hooks/useProducts";
import { ProductForm } from "@/components/ProductForm";

const App = () => {
  const { createProduct, optimisticProducts } = useProducts();

  return (
    <div className="h-screen w-full pt-20 flex flex-col gap-10 items-center bg-gradient-to-br">
      <ProductForm onCreate={createProduct} />

      <div className="bg-white p-4 rounded-lg w-1/2 md:w-1/4 shadow-md border border-gray-300">
        <h1 className="text-2xl font-bold text-center mb-5">Product List</h1>

        <div className="flex justify-between space-y-4">
          {optimisticProducts.length > 0 ? (
            optimisticProducts.map((product) => (
              <div key={product._id}>
                <strong>{product.name}</strong>: ${product.price}
              </div>
            ))
          ) : (
            <p>No Products!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
