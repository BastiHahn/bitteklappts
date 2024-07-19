import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

import Services from "./components/Services";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Testimonials />
        <Contact />
        <Prices />
      </main>
    </>
  );
}
