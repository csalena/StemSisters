"use client";
import "../css/Footer.css";
import { useApiResource } from "../hooks/useApiResource";

function Footer() {
  const { data, loading, error } = useApiResource("/api/footer");
  const footerData = data[0];

  if (loading || !footerData) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div>
      <footer id={footerData.sectionId}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={footerData.wave?.viewBox}
        >
          <path
            fill={footerData.wave?.fill}
            fillOpacity="1"
            d={footerData.wave?.path}
          ></path>
        </svg>
      </footer>
    </div>
  );
}

export default Footer;
