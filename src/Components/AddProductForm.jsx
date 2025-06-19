import { useState } from "react";
import {useNavigate} from "react-router-dom";

const AddProductForm = () => {
  const [product_name, setName] = useState("");
  const [product_price, setPrice] = useState("");
  const [product_desc, setDescription] = useState("");
  const [product_tag, setTags] = useState("");
  const [image_url, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      product_name,
      product_desc,
      product_price,
      product_tag,
      image_url,
    };

    fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Product added:", data);
        // Reset form fields
        setName("");
        setPrice("");
        setDescription("");
        setTags("");
        setImageUrl("");
      })
      .catch((error) => console.error("Error adding product:", error));
      navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-10">
      <label className="block">
        Product Name:
        <input
          type="text"
          value={product_name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </label>
      <label className="block">
        Price:
        <input
          type="number"
          value={product_price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </label>
      <label className="block">
        Description:
        <textarea
          value={product_desc}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </label>
      <label className="block">
        Tags:
        <input
          type="text"
          value={product_tag}
          onChange={(e) => setTags(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </label>
      <label className="block">
        Image URL:
        <input
          type="text"
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
