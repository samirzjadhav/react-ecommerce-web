import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <Image src="/logo2.png" alt="" width={120} height={120} />
          <div className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </div>
        </div>
        {/* Right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Servieces</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
