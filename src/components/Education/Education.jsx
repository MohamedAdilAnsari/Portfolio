import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap, FaSchool, FaAward } from "react-icons/fa";

export const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Computer Science (B.E - CSE)",
      institution: "Al-Ameen Engineering College, Erode | Anna University",
      period: "2022 - 2026",
      scoreType: "CGPA",
      score: "8 / 10",
      icon: <FaGraduationCap />,
      highlight: "Completed 4-year engineering program with focus on Full Stack Web Development, Software Engineering, Data Structures & Database Management Systems."
    },
    {
      degree: "Senior Secondary Education (HSC – 12th)",
      institution: "Wisdom Park International School, Ambur (CBSE)",
      period: "2021",
      scoreType: "Percentage",
      score: "74.8%",
      icon: <FaSchool />,
      highlight: "Specialized in Science & Mathematics with strong academic performance."
    }
  ];

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationGrid}>
        {educationList.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <div className={styles.details}>
              <div className={styles.header}>
                <span className={styles.period}>{item.period}</span>
                <span className={styles.scoreBadge}>
                  <FaAward className={styles.awardIcon} /> {item.scoreType}: {item.score}
                </span>
              </div>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.highlight}>{item.highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
