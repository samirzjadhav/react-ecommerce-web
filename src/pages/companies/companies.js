import React from "react";
import Image from "next/image";

const companies = () => {
  return (
    <section className="c-wrappper">
      <div className="padding innerWidth flexCenter c-container px-[30px]">
        <Image src="./prologis.png" alt="" />
        <Image src="./tower.png" alt="" />
        <Image src="./equinix.png" alt="" />
        <Image src="./realty.png" alt="" />
      </div>
    </section>
  );
};

export default companies;
