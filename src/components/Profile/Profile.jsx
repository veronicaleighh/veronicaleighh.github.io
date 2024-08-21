import React from "react";
import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container} id="profile">
      <h2 className={styles.title}>ABOUT ME</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("profile/profileImg.jpg")}
          className={styles.aboutImage}
        />
        <div className={styles.textSection}>
          <p className={styles.description}>
            Hello! I'm <span><b>Veronica Leigh C. Surio.</b></span> I describe myself as someone who's goal-oriented and highly-motivated in everything I do in life. I always aim to strive for excellence and to pursue my ambitions while fighting my way through life as a young adult and to cope with everything that entails. My objective is to utilize my skills and what I've learned in the field of technology. I also enjoy solving problems in a creative way while ensuring I provide the best quality of my work as I am dedicated in everything I do.
            <br /><br />
            I'm an aspiring <b>UI/UX designer, web developer, software engineer, and data analyst</b> eager to create innovative digital experiences. I blend creativity with technical skills to drive impactful solutions and stay ahead of industry trends. My goal is to contribute to projects that push the boundaries of technology.
          </p>
          <div className={styles.educationSection}>
            <h3 className={styles.educationTitle}>Education</h3>
            <ul className={styles.educationList}>
              <li className={styles.educationLists}>
                <span className={styles.level}>College</span>
                <span className={styles.program}><br/>Bachelor of Science in Computer Engineering with Specialization in Big Data</span>
                <span className={styles.other}><br/>GSIS Scholar</span>
                <span className={styles.other}><br /> Rank 4, PUP Computer Engineering - Top Ten Batch Overall Ranking (2023) </span>
                <span className={styles.school}><br/>Polytechnic University of the Philippines - Sta. Mesa</span>
                <span className={styles.year}><br/>2020-2024</span>
              </li>
              <li className={styles.educationLists}>
                <span className={styles.level}><br/>Senior High School</span>
                <span className={styles.program}><br/>Science, Technology, Engineering, and Mathematics (STEM)</span>
                <span className={styles.school}><br/>FEU High School - Manila</span>
                <span className={styles.award}><br/>With Honors</span>
                <span className={styles.year}><br/>2018-2020</span>
              </li>
              <li className={styles.educationLists}>
                <span className={styles.level}><br/>Junior High School</span>
                <span className={styles.school}><br/>National College of Business and Arts (NCBA) - Fairview</span>
                <span className={styles.award}><br/>With Honors</span>
                <span className={styles.year}><br/>2014-2018</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
