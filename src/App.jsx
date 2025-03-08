import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./Pages/AddProduct.jsx";
import Home from "./Pages/Home.jsx";
import TagView from "./Pages/TagView.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/tagview/:tagParam" element={<TagView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
