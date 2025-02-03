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

  return (
    <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data && data.length > 0 ? (
        data.map((product) => (
          <div
            key={product.product_id}
            className="product-card border p-4 rounded shadow-md"
          >
            <h2 className="text-xl font-bold mb-2">{product.product_name}</h2>
            <p className="text-gray-700 mb-2">{product.product_desc}</p>
            <p className="text-gray-900 font-semibold mb-2">
              Price: ${product.product_price}
            </p>
            <p className="text-gray-600">Tag: {product.product_tag}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default ProductGrid;
