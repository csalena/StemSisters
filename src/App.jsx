"use client";
import { useState } from "react";
import "./css/App.css";
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
            <a href="#home" id="nav-link1">
              Home
            </a>
          </li>
          <li>
            <a href="#about" id="nav-link2">
              About
            </a>
          </li>
          <li>
            <a href="#contact" id="nav-link3">
              Contact
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
        <h1 id="kincsjaro_cim">Kincsjáró</h1>
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
      </section>
      <section id="regions">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#314E43"
            fill-opacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,245.3C672,245,768,203,864,192C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section id="masodik_zold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0f1f5"
            fill-opacity="1"
            d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,266.7C672,256,768,192,864,181.3C960,171,1056,213,1152,240C1248,267,1344,277,1392,282.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
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

// export default function Scroll() {
//   gsap.registerPlugin(ScrollTrigger);

//   //    ZoomSection() {
//   //     const container = useRef(null);
//   //   }
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: "#elso_zold",
//             start: "top top",
//             end: "+=150%",
//             pin: true,
//             scrub: 1,
//           },
//         })

//         // layer 5
//         .to(
//           ".zoom_img[data-layer='5']",
//           {
//             opacity: 1,
//             z: 1200,
//             ease: "power1.inOut",
//           },
//           0,
//         )

//         // layer 4
//         .to(
//           ".zoom_img[data-layer='4']",
//           {
//             opacity: 1,
//             z: 1000,
//             ease: "power1.inOut",
//           },
//           0,
//         )

//         // layer 3
//         .to(
//           ".zoom_img[data-layer='3']",
//           {
//             opacity: 1,
//             z: 800,
//             ease: "power1.inOut",
//           },
//           0,
//         )

//         // layer 2
//         .to(
//           ".zoom_img[data-layer='2']",
//           {
//             opacity: 1,
//             z: 600,
//             ease: "power1.inOut",
//           },
//           0,
//         )

//         // layer 1
//         .to(
//           ".zoom_img[data-layer='1']",
//           {
//             opacity: 1,
//             z: 400,
//             ease: "power1.inOut",
//           },
//           0,
//         )

//         // heading
//         .to(
//           "#kincsjaro_cim",
//           {
//             opacity: 1,
//             z: 50,
//             ease: "power1.inOut",
//           },
//           0,
//         );
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="elso_zold">
//       <h1 id="kincsjaro_cim">Kincsjáró</h1>
//       <div class="zoom_img" data-layer="1">
//         <img src="../balf2.jpeg" alt="balf2" class="balf2" />
//       </div>
//       <div class="zoom_img" data-layer="2">
//         <img src="../cuha_volgy.jpg" alt="cuha" class="cuha" />
//       </div>
//       <div class="zoom_img" data-layer="2">
//         <img src="../pipacsok.jpg" alt="pipacsok" class="pipacsok" />
//       </div>
//       <div class="zoom_img" data-layer="3">
//         <img src="../nagycenk.png" alt="nagycenk" class="nagycenk" />
//       </div>
//       <div class="zoom_img" data-layer="4">
//         <img src="../sopron_atjaro.png" alt="atjaro" class="atjaro" />
//       </div>
//       <div class="zoom_img" data-layer="4">
//         <img src="../balf1.jpeg" alt="balf1" class="balf1" />
//       </div>
//       <div class="zoom_img" data-layer="5">
//         <img src="../soproni_erdo.jpg" alt="sopron" class="sopron" />
//       </div>
//     </section>
//   );
// }

export default App;
