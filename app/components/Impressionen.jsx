import React from "react";

const Impressionen = () => {
  return (
    <section className="section_gal">
      <div className="container gal_cont">
        <h2>IMPRESSIONEN</h2>
        <p className="impress_descr">
          Sauge den Vibe meiner Sessions auf und tauche ein in eine
          eunvergessliche Welt voller Erfahrungen, die Dein leben bereichenr
          werde. Des glabst ned wos do so geht oida. Sauge den Vibe meiner
          Sessions auf und tauche ein in eine eunvergessliche Welt voller
          Erfahrungen, die Dein leben bereichenr werde. Des glabst ned wos do so
          geht oida.
        </p>
        <div className="gallery">
          <div className="gallery-panel">
            <img src="/images/IMG_8678.jpg" alt="" />
          </div>

          <div className="gallery-panel">
            <img src="/images/alt fitness.jpg" alt="" />
          </div>

          <div className="gallery-panel">
            <img src="/images/dehnen.jpg" alt="" />
          </div>

          <div className="gallery-panel">
            <img src="/images/IMG_8535.jpg" alt="" />
          </div>

          <div className="gallery-panel">
            <img src="/images/IMG_8596.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressionen;
