import React from "react";
import styles from "./style.module.css";

const hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">Left Section</div>
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
