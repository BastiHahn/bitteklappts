import React from "react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { animateOnScroll } from "./gsapAnimations";

const NewContact = () => {
  const headRef = useRef(null);
  const descrRef = useRef(null);
  const contactSectionRef = useRef(null);

  const nameInputRef = useRef(null);
  const mailInputRef = useRef(null);
  const textInputRef = useRef(null);
  const checkInputRef = useRef(null);
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [succ, setSucc] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const checkValid = () => {
    nameInputRef.current.value.length >= 3 &&
    mailInputRef.current.value.includes("@") &&
    mailInputRef.current.value.length >= 4 &&
    textInputRef.current.value.length >= 4 &&
    checkInputRef.current.checked
      ? setIsValid(true)
      : setIsValid(false);
  };

  const validateForm = () => {
    checkValid();
  };

  const openMail = () => {
    window.location.href =
      "mailto:peter-bischof@gmx.de?subject=Anfrage via Website";
  };

  const callNr = () => {
    window.location.href = "tel:+4917632273614";
  };

  const toInsta = () => {
    window.open("https://www.instagram.com/piet_0612/", "_blank");
  };

  useEffect(() => {
    animateOnScroll(
      [headRef.current, descrRef.current],
      contactSectionRef.current
    );
  }, []);

  useEffect(() => {
    // Perform initial validation in case of autofill or pre-filled values
    validateForm();
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate the form
    validateForm();

    if (isValid) {
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
            setIsLoading(false);
          },
          (error) => {
            console.log("FAILED...", error.text);
            // Optionally handle the error state
            setIsLoading(false);
          }
        );
    } else {
      console.log("Form validation failed.");
      setIsLoading(false);
    }
  };

  return (
    <section
      className="newContact_section"
      id="kontakt"
      ref={contactSectionRef}
    >
      <div className="newcon_grid">
        <form onSubmit={sendEmail} ref={formRef}>
          <h2 className="section_h2 serv_descr_gsap" ref={headRef}>
            Kontakt
          </h2>
          <p
            className="section_description grey_contact serv_descr_gsap"
            ref={descrRef}
          >
            Gemeinsam sind wir stark. Lass uns in Kontakt treten und
            herausfinden, wie ich Dir am besten helfen kann. Mit einer
            maßgeschneideten Betreuung kommen wir Deinen Zielen systematisch und
            voller positiver Ennergie näher.
          </p>
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
                onChange={validateForm}
                ref={nameInputRef}
              />
            </div>

            <div className="contact_div">
              <label htmlFor="email">Email</label>
              <input
                onChange={validateForm}
                ref={mailInputRef}
                type="email"
                placeholder="m.mustermann@web.de"
                id="email"
                autoComplete="true"
                name="user_email"
                required
              />
            </div>
          </div>

          <div className="div_textarea">
            <label htmlFor="textarea">Deine Nachricht</label>
            <textarea
              ref={textInputRef}
              className="my_textarea"
              id="textarea"
              placeholder="Ich habe Fragen zum Personal Training..."
              name="message"
              type="text"
              minLength={4}
              required
              rows={5}
              onChange={validateForm}
            ></textarea>
          </div>

          <div className="div_checkbox">
            <input
              type="checkbox"
              className="check"
              id="check"
              ref={checkInputRef}
              required
              onChange={validateForm}
            />
            <label className="datenschutz" htmlFor="check">
              Datenschutzerklärung gelesen und akzeptiert. *
            </label>
          </div>
          <p
            style={
              isLoading
                ? {
                    display: "block",
                    color: "orange",
                    fontFamily: "var(--fontPrime)",
                    border: "1px solid orange",
                  }
                : succ
                  ? {
                      display: "block",
                      color: "var(--clrGreen)",
                      fontFamily: "var(--fontPrime)",
                    }
                  : { display: "none" }
            }
          >
            {isLoading
              ? "Einen Moment. Deine Anfrage wird verarbeitet."
              : succ
                ? "Danke für Deine Nachricht. Ich melde mich schnellstmöglich bei Dir."
                : "Hoppla. Etwas ist schiefgelaufen. Bitte versuche mich anderweitig zu erreichen."}
          </p>

          <button
            type="submit"
            disabled={!isValid}
            className={`${isValid ? "prime_button send_button" : "disabled_button"}`}
            style={{
              backgroundColor: isLoading ? "orange" : "",
            }}
          >
            SENDEN
          </button>

          <div className="otherCon_infos">
            <div className="oth" onClick={openMail}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="var(--clrGreen)"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
              <p>peter-bischof@gmx.de</p>
            </div>
            <div className="oth" onClick={callNr}>
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
              <p>+49 17632273614</p>
            </div>
            <div className="oth">
              <svg
                onClick={toInsta}
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
              <a href="https://www.instagram.com/piet_0612/" target="_blank">
                @piet_0612
              </a>
            </div>
          </div>
        </form>

        <div className="con_img">
          <img src="/images/another high fi.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default NewContact;
