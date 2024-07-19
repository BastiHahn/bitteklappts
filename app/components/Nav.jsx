import React from "react";

const Nav = () => {
  return (
    <header className="container head">
      <nav>
        <div className="logo">
          <svg
            width="1.75rem"
            height="1.75rem"
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
          <p>Bischof</p>
        </div>
        <ul>
          <li>
            <a href="#home" className="first_link">
              Home
            </a>
          </li>
          <li>
            <a href="#about">Über Mich</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#services">KUNDEN</a>
          </li>
          <li>
            <a href="#services">PREISE</a>
          </li>
        </ul>
        <a href="#kontakt">Kontakt</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="var(--clrWhite)"
          className="hamburger"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </nav>
    </header>
  );
};

export default Nav;
