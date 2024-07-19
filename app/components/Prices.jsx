import React from "react";

const Prices = () => {
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

  const unchecked = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="var(--clrWhite)"
      className="bi bi-ban-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M2.71 12.584q.328.378.706.707l9.875-9.875a7 7 0 0 0-.707-.707l-9.875 9.875Z" />
    </svg>
  );

  const priceItems = [
    {
      service: "Personal Training",
      description: "Für Personal Training und weitere Dienste für Dich.",
      subtext: "pro Monat",
      price: 150,
      features: {
        f1: "wöchentl. Feedbackgespräch",
        f2: "1 Hautfaltenmessung",
        f3: "1 Einzelplan",
      },
    },
    {
      service: "Hautfaltenmessung",
      description: "Um deine Potentiale zu entecken und gezielt zu nutzen.",
      subtext: "pro Messung",
      price: 70,
      features: {
        f1: "Messung der Hautfalten",
        f2: "Analyse & Auswertung",
        f3: "Besprechung der Maßnahmen",
      },
    },
    {
      service: "Fasziales Stretching",
      description:
        "Da Regeneration und Mobilität wichtiger sind als Du denkst.",
      subtext: "pro Stunde",
      price: 100,
      features: {
        f1: "Anamnese",
        f2: "Stretching & Behandlung",
        f3: "Coaching & Planung",
      },
    },
  ];

  return (
    <section className="section_prices">
      <div className="content container">
        <div className="header_Cont">
          <h1>Preise</h1>
          <p className="beschreibung">
            Unsere Preisgestaltung ist darauf ausgelegt, Ihnen maximale
            Flexibilität und Transparenz zu bieten. Wir wissen, dass jeder Kunde
            unterschiedliche Bedürfnisse und Ziele hat, und daher haben wir ein
            Preismodell entwickelt, das auf Ihre individuellen Anforderungen
            abgestimmt ist.
          </p>
        </div>

        <div className="priceview">
          {priceItems.map((item, index) => (
            <div className="card" key={index}>
              <div className="card_inside">
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
                <div className="btn-div">
                  <button>Buchen</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
