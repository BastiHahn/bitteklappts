import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <div className="foot_column">
          <div className="foot_logo_flex">
            <svg
              width="1.8rem"
              height="1.8rem"
              viewBox="0 0 405 500"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <g transform="matrix(-.1 0 0 0.1 696.25-283.65)">
                <path
                  d="M6248,7508l-648-291v-1837-1837l650-335l650-335v2463c0,1355-1,2464-2,2464-2,0-294-132-650-292Z"
                  fill="#fdf7fa"
                />
                <path
                  d="M4653,7263l-473-255v-1633-1632l471-292c258-161,477-295,485-298c12-4,14,283,14,2181c0,1742-3,2186-12,2186-7-1-226-116-485-257Z"
                  fill="#fdf7fa"
                />
                <path
                  d="M3335,6956l-360-214v-1373-1373l350-239c193-131,358-243,368-248c16-9,17,81,17,1826c0,1009-3,1835-7,1835-5,0-170-97-368-214Z"
                  fill="#1bbc6f"
                />
              </g>
            </svg>
            <p>Peter Bischof</p>
          </div>
          <p className="sub_company_info">
            Personal Training & Lifestyle Coaching
          </p>
          <p className="company_descr">
            Langjährige Erfahrung, viel Spaß und Motivation treiben mich an, das
            Beste aus dir herauszuholen. In München und Miesbach für dich da.
          </p>
          <div className="foot_socials">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="var(--clrGrey)"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="var(--clrGrey)"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="var(--clrGrey)"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </div>
        </div>
        <div className="foot_column">
          <h4>Links</h4>
          <div className="cont_footer_links">
            <a href="/">Home</a>
            <a href="#überMich">Über Mich</a>
            <a href="#kunden">Kunden</a>
            <a href="#preise">Preise</a>
          </div>
        </div>
        <div className="foot_column">
          <h4>Services</h4>
          <div className="cont_footer_links">
            <a href="#1">Personal Training</a>
            <a href="#2">Hautfaltenmessung</a>
            <a href="#3">Fasziales Stretching</a>
            <a href="#4">Kleingruppentraining</a>
          </div>
        </div>
        <div className="foot_column">
          <h4>Kontakt</h4>
          <div className="cont_footer_links">
            <a href="mailto:peter-bischof@gmx.de">peter-bischof@gmx.de</a>
            <a href="tel:+4917632273614">+49 176 32273614</a>
            <a href="https://maps.app.goo.gl/kNBvZHEMDVevmSMv5" target="blank">
              83714 Miesbach
            </a>
            <a
              href="https://www.linkedin.com/in/peter-bischof-9a438114b/"
              target="blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="foot_divider"></div>
      <div className="footer_bottom container">
        <p className="copyright">Copyright by Peter Bischof 2024</p>
        <div className="agbs_flex">
          <a className="policies">Privacy Policy</a>
          <a className="policies">Datenschutz</a>
          <a className="policies">AGBs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
