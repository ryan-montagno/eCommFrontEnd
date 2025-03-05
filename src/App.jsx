import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./Pages/AddProduct.jsx";
import Home from "./Pages/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addproduct" element={<AddProduct />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
