import React from "react";
import styles from "./style.module.css";

const hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>

          <div className="hero-des flexColStart">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search-bar">search bar</div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
