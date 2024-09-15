"use client";
import Hero from "./components/Hero";
import AboutCopy from "./components/AboutCopy";
import NewServices from "./components/NewServices";
import NewContact from "./components/NewContact";
import Prices from "./components/Prices";
import AnotherTestimonial from "./components/AnotherTestimonial";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutCopy />
        <NewServices />
        <AnotherTestimonial />
        <NewContact />
        <Prices />
      </main>
    </>
  );
}
