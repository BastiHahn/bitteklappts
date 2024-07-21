"use client";
import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const headContact = useRef(null);
  const contactSection = useRef(null);
  const contactSubHead = useRef(null);
  const infoCard = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to([headContact.current, contactSubHead.current], {
      opacity: 1,
      y: "0px",
      duration: 1,
      scrollTrigger: {
        trigger: contactSection.current,
        start: "top 90%",
        once: true,
      },
    });

    gsap.to(infoCard.current, {
      right: 0,
      ease: "power4.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: contactSection.current,
        start: "top 50%",
        once: true,
      },
    });
  }, []);

  const instaSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="2rem"
      height="2rem"
      viewBox="0 0 30 30"
      fill="var(--clrGreen)"
    >
      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
    </svg>
  );
  const pinSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      fill="var(--clrGreen)"
      viewBox="0 0 16 16"
    >
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  );
  const mailSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      fill="var(--clrGreen)"
      viewBox="0 0 16 16"
    >
      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
    </svg>
  );
  const phoneSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      fill="var(--clrGreen)"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"
      />
    </svg>
  );
  const contactFields = [
    { name: "Name", placeholder: "Max Mustermann", type: "text", for: "name" },
    {
      name: "Email",
      placeholder: "max-mustermann@gmail.com",
      type: "email",
      for: "email",
    },
    { name: "Alter", placeholder: "35", type: "number", for: "alter" },
  ];

  return (
    <section className="contact_section" ref={contactSection} id="kontakt">
      <div className="bg_cont">
        <div className="black_bg"></div>
        <div className="green_bg"></div>
      </div>

      <div className="info_card" ref={infoCard}>
        <div className="inner_contact_info">
          <h4>Kontaktdaten</h4>
          <div className="contact_data">
            <div className="con_data_flex">
              {mailSVG}
              <a href="mailto:peter-bischof@gmx.de">peter-bischof@gmx.de</a>
            </div>
            <div className="con_data_flex">
              {phoneSVG}
              <a href="tel:+4917632273614">+49 176 32273614</a>
            </div>
            <div className="con_data_flex">
              {pinSVG}
              <a
                href="https://maps.app.goo.gl/kNBvZHEMDVevmSMv5"
                target="_blank"
              >
                Wendelsteinstr. 37, 83714 Miesbach
              </a>
            </div>
            <div className="con_data_flex">
              {instaSVG}
              <a href="https://www.instagram.com/piet_0612" target="_blank">
                @piet_0612
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_head container">
        <h2 className="contact_h2" ref={headContact}>
          Kontakt
        </h2>
        <p ref={contactSubHead} className="contact_subhead">
          Lass uns gemeinsam an deiner Gesundheit arbeiten. Bei einem
          kostenloses Erstgespräch finden wir heraus, wie wir deine Ziele
          schnell erreichen können. Erstgespräch finden wir heraus, wie wir
          deine Ziele schnell erreichen können.
        </p>
      </div>

      <div className="container contact_form_cont">
        <form action="">
          <div className="form_flex">
            <div className="contact_div">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Max Mustermann" id="name" />
            </div>

            <div className="contact_div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="m.mustermann@web.de"
                id="email"
              />
            </div>
          </div>

          <div className="div_textarea">
            <label htmlFor="textarea">Deine Nachricht</label>
            <textarea
              className="my_textarea"
              id="textarea"
              placeholder="Ich habe Fragen zum Personal Training..."
            ></textarea>
          </div>

          <div className="div_checkbox">
            <input type="checkbox" className="check" id="check" required />
            <label className="datenschutz" htmlFor="check">
              Datenschutzerklärung gelesen und akzeptiert. *
            </label>
          </div>

          <button type="submit" className="send_button">
            SENDEN
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
