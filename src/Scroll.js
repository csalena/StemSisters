"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Scroll = () => {
  useEffect(() => {
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
            end: "+=100%",
            pin: true,
            scrub: 1,
          },
        })
        //layer 5
        .to(
          "#zoom_img[data-layer='5']",
          {
            opacity: 1,
            z: 1200,
            ease: "power1.inOut",
          },
          0,
        )

        // layer 4
        .to(
          "#zoom_img[data-layer='4']",
          {
            opacity: 1,
            z: 1000,
            ease: "power1.inOut",
          },
          0,
        )

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
            z: 400,
            ease: "power1.inOut",
            scale: 3.2,
          },
          0,
        );

      gsap.to(
        "#kincsjaro_cim",
        {
          opacity: 1,
          z: 50,
          ease: "power1.inOut",
        },
        0,
      );
    });

    return () => ctx.revert();
  }, []);
};
