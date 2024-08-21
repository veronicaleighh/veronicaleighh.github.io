import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container}> 
        <div className={styles.content}> 
            <h1 className={styles.title}> Hi, I'm <span className={styles.name}> Veronica </span>!</h1>
            <p className={styles.description}> I combine creativity with code as an aspiring UI/UX designer, web developer, software engineer, and data analyst, focused on building great web experiences. </p>
            <a href="mailto:veronicaleighsurio@gmail.com" className={styles.contactBtn}> Contact Me </a>
        </div>
        <img
        src={getImageUrl("aboutme/aboutImage.png")}
        alt="Hero image of me"
        className={styles.aboutImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
};
