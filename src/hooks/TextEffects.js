// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { GSDevTools } from "gsap/GSDevTools";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(GSDevTools, SplitText);

// gsap.registerEffect({
//   name: "textInsertion",
//   effect: (targets, config) => {
//     return gsap.from(targets, { opacity: 0, y: -100 });
//   },
// });

// function init() {
//   gsap.set("#regions", { autoAlpha: 1 });

//   gsap.effects.textInsertion("h2");

//   GSDevTools.create({});
// }

// export default init;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");

        entry.target.style.opacity = "1";
      } else {
        entry.target.classList.remove("animate__animated", "animate__fadeInUp");

        entry.target.style.opacity = "0";
      }
    });
  },
  {
    threshold: 0.3,
  },
);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});
