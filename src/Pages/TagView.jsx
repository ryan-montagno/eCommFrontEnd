import { useParams } from "react-router-dom";

import NavBar from "../Components/NavBar.jsx";
import ProductTagGrid from "../Components/ProductTagGrid.jsx";

function TagView() {
  const { tagParam } = useParams();

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <ProductTagGrid tagParam={tagParam} />
    </div>
  );
}

export default TagView;
