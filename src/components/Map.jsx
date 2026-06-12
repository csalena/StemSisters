"use client";
import "../css/Map.css";
import { useApiResource } from "../hooks/useApiResource";

function Map() {
  const { data, loading, error } = useApiResource("/api/map");
  const mapData = data[0];

  if (loading || !mapData) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div>
      <section id={mapData.sectionId}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={mapData.wave?.viewBox}>
          <path
            fill={mapData.wave?.fill}
            fillOpacity="1"
            d={mapData.wave?.path}
          ></path>
        </svg>
      </section>
    </div>
  );
}
export default Map;
