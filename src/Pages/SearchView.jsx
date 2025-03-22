import { useParams } from "react-router-dom";

import NavBar from "../Components/NavBar.jsx";
import ProductSearchGrid from "../Components/ProductSearchGrid.jsx";

function SearchView() {
  const { searchParam } = useParams();

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <ProductSearchGrid searchParam={searchParam} />
    </div>
  );
}

export default SearchView;
