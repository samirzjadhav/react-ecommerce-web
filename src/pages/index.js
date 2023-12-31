import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header/header.js";
import Hero from "./hero/hero.js";
import Companies from "./companies/companies.js";
import Residencies from "./residencies/residencies.js";
import Value from "./value/value.js";
import Contact from "./contact/contact.js";
import GetStarted from "./getstarted/getStarted.js";
import Footer from "./footer/footer.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}
