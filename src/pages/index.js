import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header/header.js";
import Hero from "./hero/hero.js";
import Companies from "./companies/companies.js";
import Residencies from "./residencies/residencies.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Companies />
      <Residencies />
    </div>
  );
}
