"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Hero = () => {
  const heroHeader = useRef(null);
  const heroIMGCont = useRef(null);
  const heroSub = useRef(null);
  const heroButton = useRef(null);

  useEffect(() => {
    // Ensure the element is selected correctly

    gsap.to(heroIMGCont.current, {
      width: "100%",
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.to(heroHeader.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.75,
    });

    gsap.to(heroSub.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      delay: 1.25,
    });

    gsap.to(heroButton.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      delay: 1.75,
    });
  }, []);

  const heroIMG = "/images/couple-training-gym.jpg";
  return (
    <section className="hero_section">
      <div className="hero_content container">
        <div className="hero_left">
          <h1 className="hero_h1" ref={heroHeader}>
            Dein Training. <br />
            Deine Ziele. <br />
            Mein Fokus.
          </h1>
          <p className="hero_subtext" ref={heroSub}>
            Ich helfe Dir dabei, deine Ziele zu erreichen. Mit Personal
            Training, bei dem Du im Mittelpunkt stehst, verhelfe ich Dir mit
            wissenschaftlichen Methoden Spaß und positiver Energie zum Erfolg.
          </p>
          <button className="hero_left_button" ref={heroButton}>
            Mehr erfahren
          </button>
        </div>
        <div className="hero_right">
          <div ref={heroIMGCont} className="hero_img_cont">
            <Image
              src={heroIMG}
              width={1000}
              height={1000}
              quality={100}
              blur="true"
              alt="moulaysou"
              priority="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
