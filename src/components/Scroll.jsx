"use client";
import { useState } from "react";
import { Scroll } from "../hooks/Scroll";
import "../css/Scroll.css";

function Scroll1() {
  const [count, setCount] = useState(0);
  Scroll();

  return (
    <div>
      <section id="elso_zold">
        <div id="kincsjaro_cim">
          <h1>Kincsjáró</h1>
          <h2 id="arany">Fedezd fel Magyarország rejtett kincseit</h2>
        </div>
        <div id="zoom_img" data-layer="3">
          <img src="../balf2.jpeg" alt="balf2" id="balf2" />
        </div>
        <div id="zoom_img" data-layer="1">
          <img src="../cuha_volgy.jpg" alt="cuha" id="cuha" />
        </div>
        <div id="zoom_img" data-layer="2">
          <img src="../pipacsok.jpg" alt="pipacsok" id="pipacsok" />
        </div>
        <div id="zoom_img" data-layer="1">
          <img src="../nagycenk.png" alt="nagycenk" id="nagycenk" />
        </div>
        <div id="zoom_img" data-layer="2">
          <img src="../sopron_atjaro.png" alt="atjaro" id="atjaro" />
        </div>
        <div id="zoom_img" data-layer="3">
          <img src="../balf1.jpeg" alt="balf1" id="balf1" />
        </div>
        <div id="zoom_img" data-layer="2">
          <img src="../soproni_erdo.jpg" alt="sopron" id="sopron" />
        </div>
        <div id="zoom_img" data-layer="3">
          <img src="../medvehagyma.jpg" alt="medvehagyma" id="medvehagyma" />
        </div>
        <div id="zoom_img" data-layer="2">
          <img src="../szolos.jpg" alt="szolos" id="szolos" />
        </div>
      </section>
    </div>
  );
}

export default Scroll1;
