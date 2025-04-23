import { useProducts } from "@/hooks/useProducts";
import { ProductForm } from "@/components/ProductForm";
import { ProductList } from "@/components/ProductList";

const App = () => {
  const { createProduct, optimisticProducts } = useProducts();

  return (
    <div className="h-screen w-full pt-20 flex flex-col gap-10 items-center bg-gradient-to-br">
      <ProductForm onCreate={createProduct} />
      <ProductList products={optimisticProducts} />
    </div>
  );
};

export default App;
