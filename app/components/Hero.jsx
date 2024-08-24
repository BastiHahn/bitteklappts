"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import heroData from "@data/heroData";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const toContact = () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const heroHeader1 = useRef(null);
  const heroHeader2 = useRef(null);
  const heroHeader3 = useRef(null);
  const heroIMGCont = useRef(null);
  const heroSub = useRef(null);
  const heroButton = useRef(null);
  const heroImage = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    // Ensure the element is selected correctly

    const handleMouseEnter = () => {
      if (heroHeader3.current) {
        heroHeader3.current.style.color = "var(--clrGreen)";
      }
    };

    const handleMouseLeave = () => {
      if (heroHeader3.current) {
        heroHeader3.current.style.color = ""; // Reset to the original color
      }
    };

    const button = heroButton.current;
    if (button) {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    }

    gsap.to(heroHeader1.current, {
      left: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.25,
    });

    gsap.to(heroHeader2.current, {
      left: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.75,
    });

    gsap.to(heroHeader3.current, {
      left: 0,
      duration: 1,
      ease: "power4.out",
      delay: 1.25,
    });

    gsap.to(heroSub.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      delay: 2,
    });

    gsap.to(heroButton.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      delay: 2.25,
    });

    gsap.to(heroImage.current, {
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "bottom bottom",
        end: "bottom 70%",
        scrub: true,
      },
      objectPosition: "50% 40%",
    });
  }, []);

  const heroIMG = "/images/piet with clients.jpg";
  return (
    <section className="hero_section" id="he_ro_Section" ref={heroSectionRef}>
      <div className="hero_content">
        <div className="hero_left container">
          <h1 className="hero_h1">
            <span ref={heroHeader1}>{heroData[0].header1}</span> <br />
            <span ref={heroHeader2}>{heroData[0].header2}</span> <br />
            <span ref={heroHeader3} className="third">
              {heroData[0].header3}
            </span>
          </h1>
          <p className="hero_subtext" ref={heroSub}>
            {heroData[0].subheader}
          </p>
          <button
            onClick={toContact}
            className="hero_left_button"
            ref={heroButton}
          >
            Mehr erfahren
          </button>
        </div>
        <div ref={heroIMGCont} className="hero_img_cont">
          <Image
            src={heroIMG}
            width={1000}
            height={1000}
            quality="100"
            blur="true"
            alt="Personal Training im Fitnessstudio"
            priority="true"
            ref={heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
