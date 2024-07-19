import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero_content">
        <div className="hero_left">
          <h1>
            Dein Training. <br />
            Deine Ziele. <br />
            Mein Fokus.
          </h1>
          <p className="hero_subtext">
            Ich helfe Dir dabei, deine Ziele zu erreichen. Mit Personal
            Training, bei dem Du im Mittelpunkt stehst, verhelfe ich Dir mit
            wissenschaftlichen Methoden Spaß und positiver Energie zum Erfolg.
          </p>
          <button>Zum Angebot</button>
        </div>
        <div className="hero_right">
          <div className="hero_img_cont"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
