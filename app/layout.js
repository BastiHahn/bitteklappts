import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Personal Training by Peter Beschof",
  description:
    "Erreiche Deine Fitnessziele mit professionellem Personal Training. Individuelle Trainingspläne, Ernährungsberatung und Coaching, um Deine Gesundheit und Fitness zu verbessern. Personal und Grupeentraining in und um München!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Nav></Nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
