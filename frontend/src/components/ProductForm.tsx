import { useProductForm } from "@/hooks/useProductForm";

export const ProductForm = () => {
  const { isPending, productAction, productState } = useProductForm();

  return (
    <form action={productAction} className="space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter Product Name"
          className="px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          required
          placeholder="Enter Product Price"
          className="px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black"
        />
      </div>

      {productState.error && (
        <p
          role="alert"
          aria-live="assertive"
          className="p-2 rounded-lg bg-red-200 text-red-500"
          tabIndex={-1}
        >
          {productState.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mb-5 w-full p-2 font-semibold rounded-lg bg-black hover:bg-gray-800 text-white cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};
