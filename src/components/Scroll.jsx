"use client";
import { Scroll } from "../hooks/Scroll";
import { useApiResource } from "../hooks/useApiResource";
import "../css/Scroll.css";

function Scroll1() {
  const { data, loading, error } = useApiResource("/api/scroll");
  const section1 = data[0];

  Scroll(Boolean(section1) && !loading && !error);

  if (loading || !section1) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div>
      <section id="elso_zold">
        <div id="kincsjaro_cim">
          <h1>{section1.title}</h1>
          <h2 id="arany">{section1.subtitle}</h2>
        </div>
        {section1.images?.map((image) => (
          <div id="zoom_img" data-layer={image.layer} key={image.id}>
            <img src={image.src} alt={image.alt} id={image.id} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Scroll1;
