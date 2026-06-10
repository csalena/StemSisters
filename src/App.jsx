"use client";
import { useState } from "react";
import Nav from "./components/nav.jsx";
import Scroll1 from "./components/Scroll.jsx";
import Rolunk from "./components/Rolunk.jsx";
import Tops from "./components/Tops.jsx";
import Map from "./components/Map.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <Scroll1 />
      <Rolunk />
      <Tops />
      <Map />
      <Footer />
    </div>
  );
}
/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#314E43"
            fill-opacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,245.3C672,245,768,203,864,192C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
*/
export default App;
