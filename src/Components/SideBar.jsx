import React from "react";

function SideBar() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const tag = event.target.tag.value;

    try {
      const response = await fetch("http://localhost:8080/api/products/tag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tag }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="w-64 h-full bg-gray-300 shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Sort Products</h2>
      <form onSubmit={handleSubmit}>
        <label
          className="block mb-2 text-sm font-medium text-gray-700"
          htmlFor="tag"
        >
          Tag
        </label>
        <input
          type="text"
          id="tag"
          name="tag"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter a tag"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SideBar;
