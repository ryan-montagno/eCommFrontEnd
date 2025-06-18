

import { useState } from "react";
import {useNavigate} from "react-router-dom";

const EditProductLookUp = () => {
    const [product_id, setID] = useState("")
    const [product, setProduct] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/api/products/id?id=${product_id}`) // Adjust to match your Spring Boot API
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // If returning JSON, use response.json()
            })
            .then((data) => setProduct(data))
            .then(navigate('/editProduct'), {state: {product: product}})
            .catch((error) => console.error("Error fetching data:", error));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-10">
            <label className="block">
                Product ID:
                <input
                    type="text"
                    value={product_id}
                    onChange={(e) => setID(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
            </label>
            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Delete Product
            </button>
        </form>
    );
};

export default EditProductLookUp;
