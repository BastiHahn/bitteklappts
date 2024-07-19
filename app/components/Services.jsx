import React from "react";
import Image from "next/image";

const Services = () => {
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
  const services = [
    {
      id: 1,
      title: "Personal Training",
      description:
        "Personal Training bietet dir die Möglichkeit, effizient und zielgerichtet zu trainieren. Mit meiner Unterstützung maximierst du deine Trainingsergebnisse und minimierst gleichzeitig das Risiko von Verletzungen. Gemeinsam setzen wir realistische und erreichbare Ziele.",
      why: "Jeder Mensch ist unterschiedlich,und was für eine Person funktioniert, funktioniert möglicherweise nicht für eine andere. Ein Personal Trainer erstellt einenmaßgeschneiderten Trainingsplan, der auf Ihre individuellen Stärken, Schwächen und Ziele abgestimmt ist. Falsche Techniken beim Training können zu Verletzungen führen.",
      image: "/images/piet with clients.jpg",
      step1: "Kennenlernen & Zielsetzung",
      step1_text:
        "Wir besprechen deine individuellen Ziele und erstellen einen maßgeschneiderten Plan.",
      step2: "Workout & Trainingsplan",
      step2_text:
        "Ein auf dich zugeschnittenes Trainingsprogramm, das deine Fitnessziele optimal unterstützt.",
      step3: "Results & Future",
      step3_text:
        "Wir bewerten deinen Fortschritt und planen die nächsten Schritte, um deine langfristigen Ziele zu erreichen.",
    },
    {
      id: 2,
      title: "Hautfaltenmessung",
      description:
        "Die Hautfaltenmessung ist eine bewährte Methode, um den Körperfettanteil zu bestimmen und deine Fortschritte im Fitness- und Ernährungsprogramm genau zu verfolgen. Aber warum solltest du dich für diese Methode entscheiden? Hier sind einige Gründe:",
      why: "Die Hautfaltenmessung ist eine präzise Methode zur Ermittlung des Körperfettanteils. Durch die Messung mehrerer spezifischer Hautfaltenstellen am Körper wird ein genauer Wert ermittelt, der eine verlässliche Einschätzung des Fettgehalts ermöglicht. Zusätzlich bietet die Hautfaltenmessung eine einfache und kostengünstige Möglichkeit, Veränderungen im Körperfettanteil über die Zeit zu verfolgen. ",
      image: "/images/HaFa1.jpg",
      step1: "Kennenlernen & Zielsetzung",
      step1_text:
        "Wir besprechen deine individuellen Ziele und erstellen einen maßgeschneiderten Plan.",
      step2: "Workout & Trainingsplan",
      step2_text:
        "Ein auf dich zugeschnittenes Trainingsprogramm, das deine Fitnessziele optimal unterstützt.",
      step3: "Results & Future",
      step3_text:
        "Wir bewerten deinen Fortschritt und planen die nächsten Schritte, um deine langfristigen Ziele zu erreichen.",
    },
    {
      id: 3,
      title: "Fasziales Stretching",
      description:
        "Fasziales Stretching ist eine spezielle Form des Dehnens, die darauf abzielt, das Bindegewebe (die Faszien) im Körper zu lockern und zu dehnen. Faszien sind netzartige Strukturen, die Muskeln, Knochen und Organe umhüllen und ihnen Form und Stabilität verleihen. Sie spielen eine entscheidende Rolle für unsere Beweglichkeit, Kraft und unser allgemeines Wohlbefinden.",
      why: "Fasziales Stretching hilft, die Flexibilität der Faszien zu erhöhen, was zu einer besseren Beweglichkeit und einem größeren Bewegungsumfang führt. Dies ist besonders wichtig für Sportler, Tänzer und alle, die ihre körperliche Leistungsfähigkeit verbessern möchten.",
      image: "/images/dehnen.jpg",
      step1: "Kennenlernen & Zielsetzung",
      step1_text:
        "Wir besprechen deine individuellen Ziele und erstellen einen maßgeschneiderten Plan.",
      step2: "Workout & Trainingsplan",
      step2_text:
        "Ein auf dich zugeschnittenes Trainingsprogramm, das deine Fitnessziele optimal unterstützt.",
      step3: "Results & Future",
      step3_text:
        "Wir bewerten deinen Fortschritt und planen die nächsten Schritte, um deine langfristigen Ziele zu erreichen.",
    },
    {
      id: 4,
      title: "Kleingruppentraining",
      description:
        "Willkommen bei unserem Kleingruppentraining, wo individuelle Betreuung auf die Motivation und Dynamik einer Gruppe trifft. Trainiere gemeinsam mit Freunden oder Gleichgesinnten und erlebe, wie viel Spaß und effektiv ein gemeinsames Training sein kann.",
      why: "Obwohl es sich um Gruppentraining handelt, bietet Kleingruppentraining oft immer noch eine gewisse Form der individuellen Betreuung. Trainer können auf die Bedürfnisse und Fitnesslevel der Teilnehmer eingehen und das Training anpassen, um maximale Ergebnisse für jeden Einzelnen zu erzielen.",
      image: "/images/IMG_8712.jpg",
      step1: "Kennenlernen & Zielsetzung",
      step1_text:
        "Wir besprechen deine individuellen Ziele und erstellen einen maßgeschneiderten Plan.",
      step2: "Workout & Trainingsplan",
      step2_text:
        "Ein auf dich zugeschnittenes Trainingsprogramm, das deine Fitnessziele optimal unterstützt.",
      step3: "Results & Future",
      step3_text:
        "Wir bewerten deinen Fortschritt und planen die nächsten Schritte, um deine langfristigen Ziele zu erreichen.",
    },
  ];
  return (
    <section className="services_section">
      <div className="container serv_container">
        <h2>meine Services</h2>
        <p className="serv_descr_p">
          Ich verfolge einen ganzheitlichen Ansatz, der auf Training, Lifestyle
          Coaching & Regeneration setzt und dadurch die 3 Grundsäulen für
          optimale Gesundheit bildet. Ich gehe auf deine Ziele und individuellen
          Voraussetzungen ein, um ein maßgeschneidertes Programm zu konzipieren,
          das dir deinen Erfolg garantiert.{" "}
        </p>
        {services.map((service, index) => (
          <div
            className={`serv_flex serv ${index % 2 !== 0 ? "reverse" : ""}`}
            key={service.id}
          >
            <div className="serv_img_cont">
              <Image
                width={800}
                height={800}
                quality={100}
                src={service.image}
                alt={service.title & "Bild"}
                className="serv_image"
              />
              <img />
            </div>
            <div className="serv_descr_cont">
              <h2>
                <span>0{index + 1}</span> {service.title}
              </h2>
              <p>{service.description}</p>

              <h6>Warum {service.title}?</h6>
              <p className="why">{service.why}</p>

              <div className="bulletpoints">
                <h4>Mein Vorgehen:</h4>
                <div className="steps">
                  <div className="step">
                    <div className="step_flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="var(--clrGreen)"
                        className="bi bi-1-square-fill"
                        viewBox="0 0 16 16"
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
                        width="20px"
                        height="20px"
                        fill="var(--clrGreen)"
                        className="bi bi-2-square-fill"
                        viewBox="0 0 16 16"
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
                        width="20px"
                        height="20px"
                        fill="var(--clrGreen)"
                        className="bi bi-3-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                      </svg>

                      <p className="step_title">{service.step3}</p>
                    </div>
                    <p className="step_descr">{service.step3_text}</p>
                  </div>
                </div>
              </div>
              <h6>Warum {service.title}?</h6>
              <p className="why">{service.why}</p>
              <button>Jetzt anfragen {arrow}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
