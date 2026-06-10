"use client";
import { useState } from "react";
import "../css/Nav.css";

function Nav() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav id="menu">
        <ul>
          <li>
            <h3 id="kincsjaro">KincsJáró</h3>
          </li>
          <li>
            <a href="#regions" id="nav-link1">
              Rólunk
            </a>
          </li>
          <li>
            <a href="#masodik_zold" id="nav-link2">
              Top 3
            </a>
          </li>
          <li>
            <a href="#regions2" id="nav-link3">
              Térkép
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
    </div>
  );
}

export default Nav;
