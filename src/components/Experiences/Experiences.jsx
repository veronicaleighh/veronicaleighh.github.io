import React from "react";

import styles from "./Experiences.module.css";

import programming from "../../data/programming.json";
import bigdata from "../../data/bigdata.json";
import database from "../../data/database.json";
import others from "../../data/others.json";

import experiences from "../../data/experiences.json"

export const Experiences = () => {
    const getImageUrl = (folder, path) => {
        return `/assets/skills/${folder}/${path}`;
    };
    
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>SKILLS AND EXPERIENCES</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <div className={styles.programmingContainer}>
                        <h4 className={styles.code}>Coding & Programming</h4>
                        <div className={styles.programming}>
                            {programming.map((program, id) => (
                                <div key={id} className={styles.program}>
                                    <div className={styles.progImageContainer}>
                                        <img src={getImageUrl("programming", program.imageSrc)} alt={program.title} />
                                    </div>
                                    <p>{program.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.programmingContainer}>
                        <h4 className={styles.code}>Data Analytics Tools</h4>
                        <div className={styles.bigdata}>
                            {bigdata.map((program, id) => (
                                <div key={id} className={styles.program}>
                                    <div className={styles.progImageContainer}>
                                        <img src={getImageUrl("bigdata", program.imageSrc)} alt={program.title} />
                                    </div>
                                    <p>{program.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.programmingContainer}>
                        <h4 className={styles.code}>Database Management</h4>
                        <div className={styles.database}>
                            {database.map((program, id) => (
                                <div key={id} className={styles.program}>
                                    <div className={styles.progImageContainer}>
                                        <img src={getImageUrl("database", program.imageSrc)} alt={program.title} />
                                    </div>
                                    <p>{program.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.programmingContainer}>
                        <h4 className={styles.code}>Others</h4>
                        <div className={styles.others}>
                            {others.map((program, id) => (
                                <div key={id} className={styles.program}>
                                    <div className={styles.progImageContainer}>
                                        <img src={getImageUrl("others", program.imageSrc)} alt={program.title} />
                                    </div>
                                    <p>{program.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <ul className={styles.history}>
                    {experiences.map((historyItem, id) => {
                        return (
                        <li key={id} className={styles.historyItem}>
                            <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.company}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>
                                {historyItem.experiences.map((experience, id) => {
                                return <li key={id}>{experience}</li>;
                                })}
                            </ul>
                            </div>
                        </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
