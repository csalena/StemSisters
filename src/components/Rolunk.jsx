"use client";
import "../css/Rolunk.css";
import { useApiResource } from "../hooks/useApiResource";

function Rolunk() {
  const { data, loading, error } = useApiResource("/api/rolunk");
  const about = data[0];

  if (loading || !about) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div>
      <section id="regions">
        <h2 id="mirol_szol">{about.title}</h2>
        <div id="mirol">
          <div id="bal_szov">
            {about.paragraphs?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <p>
              <b id="arany_szov">{about.highlight}</b>
            </p>
          </div>
          <div id="jobb_kep">
            <img
              src={about.image?.src}
              alt={about.image?.alt}
              id={about.image?.id}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rolunk;
