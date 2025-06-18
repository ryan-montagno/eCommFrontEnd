import { useState } from "react";

const EditProductForm = (product) => {


  const [product_name, setName] = useState("");
  const [product_price, setPrice] = useState("");
  const [product_desc, setDescription] = useState("");
  const [product_tag, setTags] = useState("");
  const [image_url, setImageUrl] = useState("");

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
  };

  return (
      <h1>{product.product_name}</h1>
  );
};

export default EditProductForm;
