"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Scroll = (isReady) => {
  useEffect(() => {
    if (!isReady) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // const ctx = gsap.context(() => {
    //   gsap.to("#zoom_img", {
    //     scrollTrigger: {
    //       trigger: "#elso_zold",
    //       start: "top top",
    //       end: "+=150%",
    //       pin: true,
    //       scrub: 1,
    //       opacity: 1,
    //       z: 1200,
    //       ease: "power1.inOut",
    //     },
    //     scale: 2.2,
    //     opacity: 1,
    //   });
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#elso_zold",
            start: "top top",
            end: "+=120%",
            opacity: 1,
            pin: true,
            scrub: 1,
          },
        })

        // layer 3
        .to(
          "#zoom_img[data-layer='3']",
          {
            opacity: 1,
            z: 800,
            ease: "power1.inOut",
          },
          0,
        )

        // layer 2
        .to(
          "#zoom_img[data-layer='2']",
          {
            opacity: 1,
            z: 600,
            ease: "power1.inOut",
          },
          0,
        )

        //layer 1
        .to(
          "#zoom_img[data-layer='1']",
          {
            opacity: 1,
            z: 800,
            ease: "power1.inOut",
            scale: 3.2,
          },
          0,
        )

        .to(
          "#kincsjaro_cim",
          {
            trigger: "#elso_zold",
            start: "top top",
            pin: true,
            scrub: 1,
            end: "+=120%",
            opacity: 1,
            z: 50,
            ease: "power1.inOut",
          },
          0,
        );
    });

    return () => ctx.revert();
  }, [isReady]);
};
