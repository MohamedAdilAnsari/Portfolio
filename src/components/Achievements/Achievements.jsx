import React from "react";
import styles from "./Achievements.module.css";
import { FaTrophy, FaMedal, FaCertificate } from "react-icons/fa";

export const Achievements = () => {
  const achievements = [
    {
      title: "1st Prize - Project Presentation",
      event: "Association Inaugural Function & College Club Events",
      organization: "Al-Ameen Engineering College",
      icon: <FaTrophy className={styles.goldTrophy} />,
      badge: "1st Place",
      description: "Awarded First Prize for presenting an innovative web platform solution in real-time emergency blood donor matching."
    },
    {
      title: "2nd Prize - Project Fiesta",
      event: "Engineers' Day Celebration Event",
      organization: "Al-Ameen Engineering College",
      icon: <FaMedal className={styles.silverMedal} />,
      badge: "2nd Place",
      description: "Secured Second Prize for technical execution, UI design, and live presentation of full-stack web applications."
    },
    {
      title: "National Level Symposium Participant",
      event: "NEXUS'2K24 National Level Technical Symposium",
      organization: "Kongu Engineering College",
      icon: <FaCertificate className={styles.certIcon} />,
      badge: "Participant",
      description: "Selected to present real-time software engineering solutions among participants from premier colleges across the region."
    }
  ];

  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements & Awards</h2>
      <div className={styles.grid}>
        {achievements.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.topRow}>
              <div className={styles.iconBox}>{item.icon}</div>
              <span className={styles.badge}>{item.badge}</span>
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <h4 className={styles.event}>{item.event}</h4>
            <p className={styles.organization}>{item.organization}</p>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
