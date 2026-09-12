import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { FiBriefcase } from "react-icons/fi";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience & Skills</h2>
      <div className={styles.content}>
        <div className={styles.skillsContainer}>
          <h3 className={styles.subHeading}>Technical Skills</h3>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div
                  key={id}
                  className={styles.skill}
                  style={{ animationDelay: `${id * 0.08}s` }}
                >
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.historyContainer}>
          <h3 className={styles.subHeading}>Internship Experience</h3>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              const isPresent = historyItem.endDate?.toLowerCase() === "present";
              const techTags = ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "Express.js", "MongoDB", "Figma"];
              return (
                <li
                  key={id}
                  className={styles.historyItem}
                  style={{ animationDelay: `${id * 0.15}s` }}
                >
                  <div className={styles.logoWrapper}>
                    <FiBriefcase className={styles.briefcaseIcon} />
                  </div>
                  <div className={styles.historyItemDetails}>
                    <div className={styles.headerRow}>
                      <div>
                        <h3>{historyItem.role}</h3>
                        <h4 className={styles.orgName}>{historyItem.organisation}</h4>
                      </div>
                      {isPresent && (
                        <span className={styles.presentBadge}>
                          <span className={styles.pulseDot}></span> Present
                        </span>
                      )}
                    </div>
                    <p className={styles.dateText}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                    <ul className={styles.bulletList}>
                      {historyItem.experiences.map((experience, expId) => {
                        return <li key={expId}>{experience}</li>;
                      })}
                    </ul>

                    {/* Tech Badges */}
                    <div className={styles.techTagsRow}>
                      {techTags.map((tag, tagId) => (
                        <span key={tagId} className={styles.techTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
