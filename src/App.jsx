import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./Pages/AddProduct.jsx";
import Home from "./Pages/Home.jsx";
import SearchView from "./Pages/SearchView.jsx";
import Admin from "./Pages/Admin.jsx";
import EditProduct from "./Pages/EditProduct.jsx";
import DeleteProduct from "./Pages/DeleteProduct.jsx";
import EditProductLookUpPage from "./Pages/EditProductLookUpPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/:product_id" element={<EditProduct />} />
          <Route path="/deleteproduct" element={<DeleteProduct />} />
        <Route path="/searchview/:searchParam" element={<SearchView />} />
        <Route path="/editproductlookup" element={<EditProductLookUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
