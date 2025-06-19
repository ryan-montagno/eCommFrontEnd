import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const EditProductForm = ( { product_id } ) => {

  const [product, setProduct] = useState({});
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`http://localhost:8080/api/products/findByID/${product_id}`, {
      method: "GET",
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
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error deleting product:", error));
  }, [product_id]);

  const handleSubmit = (e) => {
    e.preventDefault();


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
              placeholder={product.product_name}
              onChange={(e) => product.product_name = e.target.value}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="block">
          Price:
          <input
              type="number"
              placeholder={product.product_price}
              onChange={(e) => product.product_price = e.target.value}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="block">
          Description:
          <textarea
              placeholder={product.product_desc}
              onChange={(e) => product.product_desc = e.target.value}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="block">
          Tags:
          <input
              type="text"
              placeholder={product.product_tag}
              onChange={(e) => product.product_tag = e.target.value}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <label className="block">
          Image URL:
          <input
              type="text"
              placeholder={product.image_url}
              onChange={(e) => product.image_url = e.target.value}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </label>
        <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
  );

};

export default EditProductForm;
