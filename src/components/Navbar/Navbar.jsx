import React, {useState} from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";



export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}> 
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}> 
      <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#profile"><span className="material-icons-outlined"> person </span> Profile</a>
          </li>
          <li>
            <a href="#experience"><span className="material-icons-outlined"> tips_and_updates </span> Experience</a>
          </li>
          <li>
            <a href="#projects"><span className="material-icons-outlined"> folder </span> Projects</a>
          </li>
          <li>
            <a href="#contact"><span className="material-icons-outlined"> email </span> Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};