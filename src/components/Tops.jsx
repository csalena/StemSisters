"use client";
import { useState } from "react";
import "../css/Tops.css";

function Tops() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section id="masodik_zold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0f1f5"
            fill-opacity="1"
            d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,266.7C672,256,768,192,864,181.3C960,171,1056,213,1152,240C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <h2 id="top3">Top 3 legkedveltebb helyek</h2>
        <div id="cards">
          <article id="card1">
            <figure>
              <img src="../nagycenk2.png" alt="nagycenk2" id="nagycenk2" />
            </figure>
            <div id="card_text1">
              <h3 id="lat_cim1">Lorem</h3>
              <p id="leiras1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore, quisquam vitae? Iusto dolorem consectetur id,
                voluptatum corrupti doloremque. Corrupti, distinctio nihil.
                Alias rem nobis cum repellendus sit blanditiis recusandae
                labore?
              </p>
              <a href="#" id="olvasd_tovabb">
                Olvasd tovább
              </a>
            </div>
          </article>
          <article id="card2">
            <figure>
              <img src="../nagycenk2.png" alt="nagycenk2" id="nagycenk2" />
            </figure>
            <div id="card_text1">
              <h3 id="lat_cim1">Lorem2</h3>
              <p id="leiras1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore, quisquam vitae? Iusto dolorem consectetur id,
                voluptatum corrupti doloremque. Corrupti, distinctio nihil.
                Alias rem nobis cum repellendus sit blanditiis recusandae
                labore?
              </p>
              <a href="#" id="olvasd_tovabb">
                Olvasd tovább
              </a>
            </div>
          </article>
          <article id="card3">
            <figure>
              <img src="../nagycenk2.png" alt="nagycenk2" id="nagycenk2" />
            </figure>
            <div id="card_text1">
              <h3 id="lat_cim1">Lorem3</h3>
              <p id="leiras1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore, quisquam vitae? Iusto dolorem consectetur id,
                voluptatum corrupti doloremque. Corrupti, distinctio nihil.
                Alias rem nobis cum repellendus sit blanditiis recusandae
                labore?
              </p>
              <a href="#" id="olvasd_tovabb">
                Olvasd tovább
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Tops;
