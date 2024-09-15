"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import links from "@data/links";
import logo from "@data/logo";

const Nav = () => {
  const headerRef = useRef(null);
  const navBar = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        console.log("scroll down");
        setIsNavVisible(false);
        headerRef.current.style.opacity = 0;
        headerRef.current.style.transform = "translateY(-50px)";
        headerRef.current.style.transition = "all ease-in-out 0.5s";
      } else {
        console.log("scroll up");
        setIsNavVisible(true);
        headerRef.current.style.opacity = 1;

        headerRef.current.style.transform = "translateY(0px)";
        headerRef.current.style.transition = "all 0.5s ease-in-out";
      }
      setLastScrollY(currentScrollY);
    };

    hamburgerRef.current.style.display === "none" &&
      window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Properly include dependencies

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { opacity: 1, duration: 1, ease: "power3.out" });
    }
  }, [menuOpen]);

  return (
    <header className="head" id="header_id" ref={headerRef}>
      <nav ref={navBar} className="container">
        <div className="logo pointer">{logo}</div>
        <ul>
          <li>
            <Link href="/#home" className="first_link">
              Home
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.to} className="nav_link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#kontakt" className="nav_contact_link"></Link>
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
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
            ref={hamburgerRef}
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
              <Link href="/#home" className="ham_link">
                Home
              </Link>
            </div>
            {links.map((link) => (
              <div key={link.id} className="link_ham_cont">
                <Link
                  onClick={toggleMenu}
                  href={link.to}
                  smooth={true}
                  duration={link.dur}
                  className="ham_link"
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="link_ham_cont">
              <Link onClick={toggleMenu} href="kontakt" className="ham_link">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
