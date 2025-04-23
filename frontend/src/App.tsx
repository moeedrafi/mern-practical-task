import { Route, Routes } from "react-router";

import NotFound from "@/pages/NotFound";
import ProductList from "@/pages/ProductList";
import ProductForm from "@/pages/ProductForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
