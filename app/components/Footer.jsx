"use client";

import React from "react";
import services from "@data/services";
import links from "@data/links";
import logo from "@data/logo";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <div className="foot_column f_gr_item1">
          <div className="foot_logo_flex">
            <div className="log_cont">{logo}</div>
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
            <a href="https://www.instagram.com/piet_0612/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                fill="var(--clrGrey)"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                fill="var(--clrGrey)"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/peter-bischof-9a438114b/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="1.6rem"
                height="1.6rem"
                fill="var(--clrGrey)"
              >
                {" "}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="foot_column f_gr_item2">
          <h4>Links</h4>
          <div className="cont_footer_links">
            <a
              onClick={() => {
                document
                  .getElementById("he_ro_Section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
            {links.map((link, index) =>
              index !== 1 ? (
                <a
                  key={index}
                  onClick={() => {
                    document
                      .getElementById(link.to)
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.name}
                </a>
              ) : null
            )}
          </div>
        </div>
        <div className="foot_column f_gr_item3">
          <h4>Services</h4>
          <div className="cont_footer_links">
            {services.map((service, index) => (
              <a
                key={index}
                onClick={() => {
                  document
                    .getElementById(service.id)
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {service.title}
              </a>
            ))}
            <a
              onClick={() => {
                document
                  .getElementById("kontakt")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Individuelles Paket
            </a>
          </div>
        </div>
        <div className="foot_column f_gr_item4">
          <h4>Kontakt</h4>
          <div className="cont_footer_links">
            <a href="mailto:peter-bischof@gmx.de">peter-bischof@gmx.de</a>
            <a href="tel:+4917632273614">+49 176 32273614</a>
            <a href="https://www.instagram.com/piet_0612/" target="_blank">
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/peter-bischof-9a438114b/"
              target="_blank"
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
          <a
            className="policies"
            href="/Rechtliches/impressum.pdf"
            target="_blank"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
