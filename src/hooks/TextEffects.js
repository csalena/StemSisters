export function Texteffect() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(document.querySelectorAll(".animate-on-scroll"));
          entry.target.classList.add("animate__animated", "animate__fadeInUp");

          entry.target.style.opacity = "1";
        } else {
          console.log("Mennek");
          console.log(document.querySelectorAll(".animate-on-scroll"));
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInUp",
          );

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
}
