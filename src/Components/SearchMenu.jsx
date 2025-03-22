import React from "react";
import { useNavigate } from "react-router-dom";

function SearchMenu() {

  const [searchValue, setTagValue] = React.useState("");
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/searchview/${searchValue}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Enter search term..."
            className="border border-gray-300 px-2 py-1 rounded"
          />
        </div>

    </div>
  );
}

export default SearchMenu;
