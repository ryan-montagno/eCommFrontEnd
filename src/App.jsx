import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import NavBar from "./NavBar";
import ProductGrid from "./ProductGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ProductGrid />
    </>
  );
}

export default App;
