

import { useState } from "react";
import {useNavigate} from "react-router-dom";

const EditProductLookUp = () => {
    const [product_id, setID] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/editproduct/${product_id}`);
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
