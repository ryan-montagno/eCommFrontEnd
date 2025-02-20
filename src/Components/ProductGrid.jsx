import React from "react";
import { useState, useEffect } from "react";
import guitarImage from "../assets/guitar2.jpg";

const ProductGrid = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/products") // Adjust to match your Spring Boot API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // If returning JSON, use response.json()
      })
      .then((data) => setData(data))
      .then(console.log(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data && data.length > 0 ? (
        data.map((product) => (
          <div
            key={product.product_id}
            className="product-card bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() =>
              setSelectedProduct(
                selectedProduct &&
                  selectedProduct.product_id === product.product_id
                  ? null
                  : product
              )
            }
          >
            {selectedProduct &&
            selectedProduct.product_id === product.product_id ? (
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {product.product_name}
                </h2>
                <p className="text-gray-600 mb-4">{product.product_desc}</p>
                <p className="text-gray-900 font-bold mb-2">
                  ${product.product_price}
                </p>
                <p className="text-gray-500">Tag: {product.product_tag}</p>
              </div>
            ) : (
              <img
                src={guitarImage}
                alt="Product image"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default ProductGrid;
