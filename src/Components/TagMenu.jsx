import React from "react";
import { useNavigate } from "react-router-dom";

function TagMenu() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [tagValue, setTagValue] = React.useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleInputChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/tagview/${tagValue}`);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>TagMenu</button>
      {menuVisible && (
        <div>
          <input
            type="text"
            value={tagValue}
            onChange={handleInputChange}
            placeholder="Enter tag value"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default TagMenu;
