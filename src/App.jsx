"use client";
import { useState } from "react";
import "./css/App.css";
import "./css/App2.css";
import { Scroll } from "./Scroll";

function App() {
  const [count, setCount] = useState(0);
  Scroll();

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
      <section id="regions">
        <h2 id="mirol_szol">Miről szól a Kincsjáró?</h2>
        <div id="mirol">
          <div id="bal_szov">
            <p>
              Eleged van a mindig ugyanazokból az úti célokból? A KincsJáró
              azért született, hogy segítsen felfedezni Magyarország rejtett
              szépségeit. Olyan természeti és kulturális helyszíneket gyűjtünk
              össze, amelyek gyakran elkerülik a figyelmet, mégis különleges
              élményt nyújtanak. Hiszünk abban, hogy minden ösvény egy
              történetet rejt, és minden táj egy új felfedezés lehetősége.
            </p>
            <p>
              Bemutatjuk Magyarország kevésbé ismert természeti csodáit,
              történelmi emlékeit és különleges helyszíneit, hogy a következő
              kaland mindig csak egy kattintásnyira legyen. Célunk, hogy
              inspirációt adjunk a kirándulásokhoz, és megmutassuk, mennyi
              felfedezésre váró kincs található körülöttünk.
            </p>
            <p>
              Legyen szó eldugott kirándulóhelyekről vagy lenyűgöző természeti
              látványosságokról, a KincsJáró új élményekhez és felejthetetlen
              utakhoz nyújt ötleteket. Magyarország tele van felfedezésre váró
              kincsekkel. <br />
              <b id="arany_szov">Mi pedig segítünk megtalálni őket!</b>
            </p>
          </div>
          <div id="jobb_kep">
            <img src="../rolunk.jpg" alt="rolunk" id="rolunk_kep" />
          </div>
        </div>
      </section>
      <section id="masodik_zold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0f1f5"
            fill-opacity="1"
            d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,266.7C672,256,768,192,864,181.3C960,171,1056,213,1152,240C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <h2 id="top3">Top 3 legkedveltebb helyek</h2>
        <article id="card1">
          <figure>
            <img src="../nagycenk2.png" alt="nagycenk2" id="nagycenk2" />
          </figure>
          <div id="card_text1">
            <h3 id="lat_cim1">yvxgfcvxv</h3>
            <p id="leiras1">dddddddfsdgdjufkawzdkvmmdtujhmm</p>
            <a href="#">Olvasd tovább</a>
          </div>
        </article>
      </section>
      <section id="regions2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3b5e51"
            fill-opacity="1"
            d="M0,160L48,160C96,160,192,160,288,165.3C384,171,480,181,576,197.3C672,213,768,235,864,234.7C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <footer id="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0f1f5"
            fill-opacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,112C672,96,768,96,864,117.3C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </footer>
    </div>
  );
}
/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#314E43"
            fill-opacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,245.3C672,245,768,203,864,192C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
*/
export default App;
