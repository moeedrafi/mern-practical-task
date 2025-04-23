import { Product } from "@/utils/types";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="bg-white p-4 rounded-lg w-1/2 md:w-1/4 shadow-md border border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-5">Product List</h1>

      <div className="flex justify-between space-y-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id}>
              <strong>{product.name}</strong>: ${product.price}
            </div>
          ))
        ) : (
          <p>No Products!</p>
        )}
      </div>
    </div>
  );
};
