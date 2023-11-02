import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header/header.js";
import Hero from "./hero/hero.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
    </div>
  );
}
