import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./css/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav id="menu">
        <ul>
          <li>
            <h3 id="kincsjaro">KincsJáró</h3>
          </li>
          <li>
            <a href="#home" id="nav-link1">
              Home
            </a>
          </li>
          <li>
            <a href="#about" id="nav-link2">
              About
            </a>
          </li>
          <li>
            <a href="#contact" id="nav-link3">
              Contact
            </a>
          </li>
          <li>
            <div id="keres">
              <input
                type="search"
                name="kereses"
                id="kereses"
                placeholder="Search.."
              ></input>
              <button id="kereses-btn">Keresés</button>
            </div>
          </li>
        </ul>
      </nav>
      <section id="elso"></section>
      <section id="regions"></section>
      <footer></footer>
    </div>
  );
}

export default App;
