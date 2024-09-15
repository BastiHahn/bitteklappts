"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const toContact = () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const headingsRef = useRef([]);
  const heroSubRef = useRef(null);
  const heroBtnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingsRef.current,
      { x: -25, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.inOut" }
    );

    gsap.fromTo(
      heroSubRef.current,
      {
        x: -25,
        opacity: 0,
      },
      {
        ease: "power2.inOut",
        duration: 0.6,
        delay: 0.3,
        opacity: 1,
        x: 0,
      }
    );

    gsap.fromTo(
      heroBtnRef.current,
      {
        opacity: 0,
      },
      {
        ease: "power2.inOut",
        duration: 0.6,
        delay: 0.4,
        opacity: 1,
      }
    );
  }, []);

  return (
    <section className="hero_section" id="home">
      <div className="hero_overlay"></div>
      <div className="container hero_inhalt">
        <div className="hero_headings">
          {["Deine Ziele.", "Dein Training.", "Mein Fokus."].map(
            (text, index) => (
              <h1
                key={index}
                ref={(el) => (headingsRef.current[index] = el)}
                className={index === 2 ? "focus" : ""}
              >
                {text}
              </h1>
            )
          )}
        </div>

        <div className="hero_subtext" ref={heroSubRef}>
          Personal Training und Lifestyle Coaching, das auf Deine Ziele und
          individuellen Voraussetzungen zugeschnitten ist: durch
          fortschrittliche Trainingsansätze, Expertise und positive Energie
          gelangen wir gemeinsam zu Deinem Erfolg.
        </div>

        <button
          className="prime_button hero_btn"
          onClick={toContact}
          ref={heroBtnRef}
        >
          Mehr Erfahren
        </button>
      </div>
    </section>
  );
};

export default Hero;
