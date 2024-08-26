"use client";
import React, { useEffect, useRef, useState } from "react";
import contactSubheader from "@data/contactSubheader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const headContact = useRef(null);
  const contactSection = useRef(null);
  const contactSubHead = useRef(null);
  const infoCard = useRef(null);
  const formRef = useRef(null);
  const checkBoxRef = useRef(null);

  const [succ, setSucc] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [isFormValid, setIsFormValid] = useState(false);

  const MIN_NAME_LENGTH = 3;
  const MIN_EMAIL_LENGTH = 3; // This is an example; email length validation is more complex
  const MIN_MESSAGE_LENGTH = 10;

  const validateForm = () => {
    const nameValid = nameRef.current.value.trim().length >= MIN_NAME_LENGTH;
    const emailValid =
      emailRef.current.value.trim().length >= MIN_EMAIL_LENGTH &&
      emailRef.current.value.includes("@");
    const messageValid =
      messageRef.current.value.trim().length >= MIN_MESSAGE_LENGTH;
    const accepted = checkBoxRef.current.checked;

    setIsFormValid(nameValid && emailValid && messageValid && accepted);
  };

  const handleChange = () => {
    validateForm();
  };

  useEffect(() => {
    // Perform initial validation in case of autofill or pre-filled values
    validateForm();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate the form
    validateForm();

    if (isFormValid) {
      // Send email
      emailjs
        .sendForm("service_9vcdbqo", "template_6pzgi36", formRef.current, {
          publicKey: "wMQTGs0hPMMGIboQd",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setSucc(true);
            // Reset the form only after successful submission
            formRef.current.reset();
            validateForm();
          },
          (error) => {
            console.log("FAILED...", error.text);
            // Optionally handle the error state
          }
        );
    } else {
      console.log("Form validation failed.");
    }
  };

  const handleClick = (link) => () => {
    window.open(link, "_blank");
  };
  const callNr = () => (window.location.href = "tel:+4917632273614");
  const sendMail = () =>
    (window.location.href =
      "mailto:peter-bischof@gmx.de?subject=Anfrage%20via%20Website");

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
      x: 0,
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
      onClick={handleClick("https://www.instagram.com/piet_0612/")}
    >
      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
    </svg>
  );
  const linkedInSVG = (
    <svg
      fill="var(--clrGreen)"
      viewBox="0 0 50 50"
      width="2rem"
      height="2rem"
      onClick={handleClick(
        "https://www.linkedin.com/in/peter-bischof-9a438114b/"
      )}
    >
      {" "}
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
    </svg>
  );
  const mailSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      fill="var(--clrGreen)"
      viewBox="0 0 16 16"
      onClick={sendMail}
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
      onClick={callNr}
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"
      />
    </svg>
  );

  return (
    <section className="con_sec" ref={contactSection} id="kontakt">
      <div className="bg_div">
        <div className="bg_green"></div>
      </div>

      <div className="contact_head container">
        <h2 className="contact_h2" ref={headContact}>
          Kontakt
        </h2>
        <p ref={contactSubHead} className="contact_subhead">
          {contactSubheader[2].sub}
        </p>
      </div>

      <div className="con_grid container">
        <div className="contact_form_cont">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form_flex">
              <div className="contact_div">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Max Mustermann"
                  id="name"
                  autoComplete="true"
                  name="user_name"
                  minLength={3}
                  required
                  ref={nameRef}
                  onChange={handleChange}
                />
              </div>

              <div className="contact_div">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="m.mustermann@web.de"
                  id="email"
                  autoComplete="true"
                  name="user_email"
                  required
                  ref={emailRef}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="div_textarea">
              <label htmlFor="textarea">Deine Nachricht</label>
              <textarea
                className="my_textarea"
                id="textarea"
                placeholder="Ich habe Fragen zum Personal Training..."
                name="message"
                type="text"
                minLength={5}
                required
                rows={5}
                ref={messageRef}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="div_checkbox">
              <input
                type="checkbox"
                className="check"
                id="check"
                required
                ref={checkBoxRef}
                onClick={handleChange}
              />
              <label className="datenschutz" htmlFor="check">
                Datenschutzerklärung gelesen und akzeptiert. *
              </label>
            </div>

            {succ && (
              <p className="success_message">
                Vielen Dank für Deine Nachricht! Ich melde mich schnellstmöglich
                bei Dir.
              </p>
            )}

            <button
              type="submit"
              className={`${isFormValid ? "send_button" : "disabled_button"}`}
              disabled={!isFormValid}
            >
              SENDEN
            </button>
          </form>
        </div>

        <div className="info_card" ref={infoCard}>
          <div className="inner_contact_info">
            <h4>Kontaktdaten</h4>
            <div className="contact_data">
              <div className="con_data_flex">
                {mailSVG}
                <Link href="mailto:peter-bischof@gmx.de">
                  peter-bischof@gmx.de
                </Link>
              </div>
              <div className="con_data_flex">
                {phoneSVG}
                <Link href="tel:+4917632273614">+49 176 32273614</Link>
              </div>
              <div className="con_data_flex">
                {linkedInSVG}
                <Link
                  href="https://www.linkedin.com/in/peter-bischof-9a438114b/"
                  target="_blank"
                >
                  Folge mir auf LinkedIn
                </Link>
              </div>
              <div className="con_data_flex">
                {instaSVG}
                <Link
                  href="https://www.instagram.com/piet_0612"
                  target="_blank"
                >
                  @piet_0612
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
