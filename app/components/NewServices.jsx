"use client";

import React, { useEffect } from "react";
import services from "@data/services";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { animateOnScroll } from "./gsapAnimations";

const NewServices = () => {
  const router = useRouter();
  const headRef = useRef(null);
  const descrRef = useRef(null);
  const servSection = useRef(null);

  useEffect(() => {
    animateOnScroll([headRef.current, descrRef.current], servSection.current);
  }, []);

  const handleServiceClick = (serviceId) => {
    router.push(`/services/${serviceId}`);
  };

  return (
    <section className="section_newServices" id="services" ref={servSection}>
      <div className="container">
        <h2 ref={headRef} className="section_h2">
          Meine Services
        </h2>
        <p ref={descrRef} className="section_description serv_descr_gsap">
          Ich verfolge einen ganzheitlichen Ansatz, der auf Training, Lifestyle
          Coaching & Regeneration setzt und dadurch die 3 Grundsäulen für
          optimale Gesundheit bildet. Ich gehe auf deine Ziele und individuellen
          Voraussetzungen ein, um ein maßgeschneidertes Programm zu konzipieren,
          das dir deinen Erfolg garantiert.
        </p>
        <div className="newServ_grid">
          {services.map((service, id) => (
            <div className="newServ" key={id}>
              <div
                className="newServ_img_cont"
                onClick={() => handleServiceClick(service.link_id)}
              >
                <img src={service.image} alt={service.alt} />
              </div>
              <h3>
                <span>0{service.id} </span>
                {service.title}
              </h3>
              <p>{service.short}</p>
              <button
                className="prime_button ser_button"
                onClick={() => handleServiceClick(service.link_id)}
              >
                Mehr erfahren
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;
