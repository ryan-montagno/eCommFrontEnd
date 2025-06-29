import { useState } from "react";

const DeleteProductForm = () => {
    const [product_id, setID] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/api/products/${product_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Product deleted successfully", data);
            })
            .catch((error) => console.error("Error deleting product:", error));
        navigate('/');
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

export default DeleteProductForm;

