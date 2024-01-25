import React from "react";
import Image from "next/image";

const companies = () => {
  return (
    <section className="c-wrappper">
      <div className="padding innerWidth flexCenter c-container px-[30px]">
        <Image src="/prologis.png" alt="" width={400} height={400} />
        <Image src="/tower.png" alt="" width={400} height={400} />
        <Image src="/equinix.png" alt="" width={400} height={400} />
        <Image src="/realty.png" alt="" width={400} height={400} />
      </div>
    </section>
  );
};

export default companies;
