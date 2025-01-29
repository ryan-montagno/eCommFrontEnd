import React from "react";

const ProductGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="border p-4 relative"
            style={{ paddingBottom: "100%" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              Product {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
