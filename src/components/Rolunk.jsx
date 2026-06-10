"use client";
import { useState } from "react";
import "../css/Rolunk.css";

function Rolunk() {
  const [count, setCount] = useState(0);

  return (
    <div>
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
    </div>
  );
}

export default Rolunk;
