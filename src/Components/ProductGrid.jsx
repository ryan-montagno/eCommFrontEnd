import React from "react";
import { useState, useEffect } from "react";

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

  return (
    <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data && data.length > 0 ? (
        data.map((product) => (
          <div
            key={product.product_id}
            className="product-card bg-[#1a1a1a] border border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
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
              <div className="p-4 flex flex-col items-start relative">
                <h2 className="text-4xl font-semibold text-gray-600">
                  {product.product_name}
                </h2>
                <p className="text-md text-gray-300 mb-2">
                  {product.product_desc}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-xs text-gray-500">
                  Tag: {product.product_tag}
                </p>
                <p className="text-sm text-[#535bf2] font-bold absolute top-4 right-4">
                  ${product.product_price}
                </p>
              </div>
            ) : (
              <img
                src={product.image_url}
                alt="Product image"
                className="w-full h-full object-cover rounded-lg mb-4"
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
