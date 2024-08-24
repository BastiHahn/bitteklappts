import Hero from "./components/Hero";
import AboutCopy from "./components/AboutCopy";
import Services from "./components/Services";
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutCopy />
        <Services />
        <Testimonials />
        <Contact />
        <Prices />
      </main>
    </>
  );
}
