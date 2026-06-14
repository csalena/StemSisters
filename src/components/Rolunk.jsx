"use client";
import "animate.css";
import "../css/Rolunk.css";
import { Texteffect } from "../hooks/TextEffects.js";
import { useApiResource } from "../hooks/useApiResource";
import { useEffect } from "react";

function Rolunk() {
  const { data, loading, error } = useApiResource("/api/rolunk");
  const about = data[0];

  useEffect(() => {
    return Texteffect();
  });

  if (loading || !about) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div>
      <section id="regions">
        <h2 class="mirol_szol animate-on-scroll">{about.title}</h2>
        <div id="mirol">
          <div id="bal_szov">
            {about.paragraphs?.map((text, index) => (
              <p class="animate-on-scroll" key={index}>
                {text}
              </p>
            ))}
            <p class="animate-on-scroll">
              <b id="arany_szov">{about.highlight}</b>
            </p>
          </div>
          <div id="jobb_kep" class="animate-on-scroll">
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
