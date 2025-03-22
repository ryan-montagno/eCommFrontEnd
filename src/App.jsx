import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./Pages/AddProduct.jsx";
import Home from "./Pages/Home.jsx";
import SearchView from "./Pages/SearchView.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/searchview/:searchParam" element={<SearchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
