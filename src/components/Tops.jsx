"use client";
import "../css/Tops.css";
import { useApiResource } from "../hooks/useApiResource";
import "animate.css";
import { Texteffect } from "../hooks/TextEffects.js";
import { useEffect } from "react";

function Tops() {
  const { data, loading, error } = useApiResource("/api/tops");
  const tops = data[0];

  useEffect(() => {
    return Texteffect();
  });

  if (loading || !tops) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div>
      <section id="masodik_zold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0f1f5"
            fillOpacity="1"
            d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,266.7C672,256,768,192,864,181.3C960,171,1056,213,1152,240C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <h2 id="top3" class="animate-on-scroll">
          {tops.sectionTitle}
        </h2>
        <div id="cards" class="animate-on-scroll">
          {tops.cards?.map((card) => (
            <article id={card.id} key={card.id}>
              <figure>
                <img src={card.image} alt={card.imageAlt} id={card.imageAlt} />
              </figure>
              <div id="card_text1">
                <h3 id="lat_cim1">{card.title}</h3>
                <p id="leiras1">{card.description}</p>
                <a href={card.ctaHref} id="olvasd_tovabb">
                  {card.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tops;
