import React, { useState } from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';
import webdev from '../../data/webdev.json';
import dataanalytics from '../../data/dataanalytics.json';

export const Projects = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      
      <div className={styles.dropdown}>
        <button 
          className={styles.dropdownButton} 
          onClick={() => handleToggleSection('webdev')}
        >
          Mobile & Web Development
        </button>
        <div 
          className={`${styles.dropdownContent} ${activeSection === 'webdev' ? styles.show : ''}`}
        >
          {webdev.map((project, id) => (
            <ProjectCard key={id} project={project} linkText="Source Code" />
          ))}
        </div>
      </div>

      <div className={styles.dropdown}>
        <button 
          className={styles.dropdownButton} 
          onClick={() => handleToggleSection('dataanalytics')}
        >
          Data Analytics
        </button>
        <div 
          className={`${styles.dropdownContent} ${activeSection === 'dataanalytics' ? styles.show : ''}`}
        >
          {dataanalytics.map((project, id) => (
            <ProjectCard key={id} project={project} linkText="Link" />
          ))}
        </div>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    
  );
};
