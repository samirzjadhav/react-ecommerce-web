import React from "react";
import styles from "./styles.module.css";
const header = () => {
  return (
    <section className={styles.hWrapper}>
      <div className="flexCenter paddings innerwidth h-container">
        <img src="./logo.png" alt="Logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button header-btn">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default header;
