import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>

          <div className="hero-des flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>

          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats gap-[30px]">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning </span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <Image src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
