"use client";
import "../css/Nav.css";
import { useApiResource } from "../hooks/useApiResource";

function Nav() {
  const { data, loading, error } = useApiResource("/api/nav");
  const nav = data[0];

  if (loading || !nav) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div>
      <nav id="menu">
        <ul>
          <li>
            <h3 id="kincsjaro">{nav.brand}</h3>
          </li>
          {nav.links?.map((link) => (
            <li key={link.id}>
              <a href={link.href} id={link.id}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <div id="keres">
              <input
                type="search"
                name="kereses"
                id="kereses"
                placeholder={nav.search?.placeholder}
              ></input>
              <button id="kereses-btn">{nav.search?.buttonLabel}</button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
