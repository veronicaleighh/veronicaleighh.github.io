import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project, linkText }) => {
  if (!project) {
    console.error("Project prop is undefined or null.");
    return null;
  }

  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={`${styles.image} ${imageSrc === 'projects/dashboard.png' ? styles.specialImage : ''}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link}>
            Demo
          </a>
        )}
        <a href={source} className={styles.link}>
          {linkText}
        </a>
      </div>
    </div>
  );
};
