"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import priceItems from "@data/priceItems";
import priceSubheader from "@data/priceSubheader";

const toContact = () => {
  document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
};

const Prices = () => {
  const headPrice = useRef(null);
  const priceSection = useRef(null);
  const priceSubHead = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to([headPrice.current, priceSubHead.current], {
      opacity: 1,
      y: "0px",
      duration: 1,
      scrollTrigger: {
        trigger: priceSection.current,
        start: "top 90%",
        once: "true",
      },
    });
  }, []);

  const checked = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="var(--clrWhite)"
      className="bi bi-check-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );

  return (
    <section className="section_prices" ref={priceSection} id="preise">
      <div className="container pr_cont">
        <h2 className="price_h2" ref={headPrice}>
          Preise
        </h2>
        <p className="beschreibung" ref={priceSubHead}>
          {priceSubheader[4].sub}
        </p>

        <div className="priceview">
          {priceItems.map((item, index) => (
            <div className="card" key={index}>
              <div className="inner_card">
                <h3>{item.service}</h3>
                <div className="price_info">
                  <p className="info_sub">
                    <span>{item.price}€</span> {item.subtext}
                  </p>
                  <p className="descr">{item.description}</p>
                </div>
                <div className="price_features">
                  <div className="divide"></div>
                  <div className="feature">
                    {checked}
                    <h4>{item.features.f1}</h4>
                  </div>
                  <div className="divide"></div>

                  <div className="feature">
                    {checked}
                    <h4>{item.features.f2}</h4>
                  </div>
                  <div className="divide"></div>

                  <div className="feature">
                    {checked}
                    <h4>{item.features.f3}</h4>
                  </div>
                  <div className="divide"></div>
                </div>
                <button onClick={toContact}>Buchen</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
