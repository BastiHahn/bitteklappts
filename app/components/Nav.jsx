"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import links from "@data/links";
import logo from "@data/logo";

const Nav = () => {
  const navBar = useRef(null);
  const menuRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { opacity: 1, duration: 1, ease: "power3.out" });
    }
  }, [menuOpen]);

  return (
    <header className="head">
      <nav ref={navBar} className="container">
        <div className="logo pointer">{logo}</div>
        <ul>
          <li>
            <Link href="/" className="first_link">
              Home
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={link.dur}
                className="nav_link"
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <ScrollLink
          to="kontakt"
          smooth={true}
          duration={1500}
          className="nav_contact_link"
        ></ScrollLink>
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.25rem"
            height="2.25rem"
            fill="var(--clrWhite)"
            className="close_ham"
            viewBox="0 0 16 16"
            onClick={toggleMenu}
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.25rem"
            height="2.25rem"
            fill="var(--clrWhite)"
            className="hamburger"
            viewBox="0 0 16 16"
            onClick={toggleMenu}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        )}
      </nav>
      {menuOpen && (
        <div ref={menuRef} className="hamb_menu">
          <div className="hamb_cont container">
            <div className="link_ham_cont">
              <Link href="/" className="ham_link">
                Home
              </Link>
            </div>
            {links.map((link) => (
              <div key={link.id} className="link_ham_cont">
                <ScrollLink
                  onClick={toggleMenu}
                  to={link.to}
                  smooth={true}
                  duration={link.dur}
                  className="ham_link"
                >
                  {link.name}
                </ScrollLink>
              </div>
            ))}
            <div className="link_ham_cont">
              <ScrollLink
                onClick={toggleMenu}
                to="kontakt"
                smooth={true}
                duration={1500}
                className="ham_link"
              >
                Kontakt
              </ScrollLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
