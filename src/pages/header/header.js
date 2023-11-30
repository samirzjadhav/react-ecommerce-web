import React, { useState } from "react";
import styles from "./styles.module.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const document = typeof window;
  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className={styles.hWrapper}>
      <div className="flexCenter paddings innerwidth h-container">
        <img src="./logo.png" alt="Logo" width={100} />
        <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button header-btn">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
      <div
        className="menu-icon hidden"
        onClick={() => setMenuOpened((prev) => !prev)}
      >
        <BiMenuAltRight size={30} />
      </div>
    </section>
  );
};

export default Header;
