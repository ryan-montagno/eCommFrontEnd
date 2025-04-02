import NavBar from "../Components/NavBar.jsx";
import ProductGrid from "../Components/ProductGrid.jsx";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <ProductGrid />
    </div>
  );
}

export default Home;
