"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import services from "@data/services";

const toContact = () => {
  document.getElementById("kontakt").scrollIntoView({ behavior: "smooth" });
};

const Services = () => {
  const headServices = useRef(null);
  const servSection = useRef(null);
  const servSubHead = useRef(null);
  const divLoaders = useRef([]);
  const servDescriptions = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to([headServices.current, servSubHead.current], {
      opacity: 1,
      y: "0px",
      duration: 1,
      scrollTrigger: {
        trigger: servSection.current,
        start: "top 90%",
        once: "true",
      },
    });

    gsap.utils.toArray(divLoaders.current).forEach((loader, index) => {
      const triggerElement = servDescriptions.current[index];
      gsap.to(loader, {
        width: "100%",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 15%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    });
  }, []);

  const addToDivLoaders = (el) => {
    if (el && !divLoaders.current.includes(el)) {
      divLoaders.current.push(el);
    }
  };

  const addToServDescriptions = (el) => {
    if (el && !servDescriptions.current.includes(el)) {
      servDescriptions.current.push(el);
    }
  };

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
      />
    </svg>
  );

  return (
    <section className="services_section" ref={servSection} id="services">
      <div className="container serv_container">
        <h2 className="serv_cont_h2" ref={headServices}>
          meine Services
        </h2>
        <p className="serv_descr_p" ref={servSubHead}>
          Ich verfolge einen ganzheitlichen Ansatz, der auf Training, Lifestyle
          Coaching & Regeneration setzt und dadurch die 3 Grundsäulen für
          optimale Gesundheit bildet. Ich gehe auf deine Ziele und individuellen
          Voraussetzungen ein, um ein maßgeschneidertes Programm zu konzipieren,
          das dir deinen Erfolg garantiert.{" "}
        </p>
        {services.map((service, index) => (
          <div
            className={`serv_grid ${index % 2 !== 0 ? "reverse" : ""}`}
            key={service.id}
            id={service.id}
          >
            <div className="serv_img_cont">
              <Image
                width={800}
                height={800}
                quality={100}
                src={service.image}
                alt={"Bild von" & service.title}
                className="serv_image"
                blur="true"
              />
              <div className="div_loader" ref={addToDivLoaders}></div>
            </div>

            <div className="serv_descr_cont" ref={addToServDescriptions}>
              <h2>
                <span>0{index + 1}</span> {service.title}
              </h2>
              <p>{service.description[0].descr}</p>

              <h6>Warum {service.title}?</h6>
              <p className="why">{service.why}</p>

              <div className="bulletpoints">
                <h4>Mein Vorgehen:</h4>
                <div className="steps">
                  <div className="step">
                    <div className="step_flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25rem"
                        height="1.25rem"
                        fill="var(--clrGreen)"
                        className="bi bi-1-square-fill"
                        viewBox="0 0 18 18"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                      </svg>

                      <p className="step_title">{service.step1}</p>
                    </div>
                    <p className="step_descr">{service.step1_text}</p>
                  </div>
                  <div className="step">
                    <div className="step_flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25rem"
                        height="1.25rem"
                        fill="var(--clrGreen)"
                        className="bi bi-2-square-fill"
                        viewBox="0 0 18 18"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                      </svg>

                      <p className="step_title">{service.step2}</p>
                    </div>
                    <p className="step_descr">{service.step2_text}</p>
                  </div>
                  <div className="step">
                    <div className="step_flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.25rem"
                        height="1.25rem"
                        fill="var(--clrGreen)"
                        className="bi bi-3-square-fill"
                        viewBox="0 0 18 18"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                      </svg>

                      <p className="step_title">{service.step3}</p>
                    </div>
                    <p className="step_descr">{service.step3_text}</p>
                  </div>
                </div>
              </div>
              <h6>{service.endpartTitle}</h6>
              <p className="why">{service.endpart}</p>
              <button onClick={toContact}></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
