import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // navToggle.addEventListener("click", () => {});
  return (
    <section className={styles.hWrapper}>
      <div className="flexCenter paddings innerwidth h-container">
        <Image src="./logo.png" alt="Logo" width={100} />
        <div className="flexCenter h-menu">
          {/* style={getMenuStyle(menuOpened)} */}
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button header-btn">
            <a href="">Contact</a>
          </button>
        </div>
        <div className="menu-icon hidden">
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
