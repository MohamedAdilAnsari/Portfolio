import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { FiExternalLink, FiClock, FiInfo } from "react-icons/fi";

export const ProjectCard = ({ project, onSelectProject }) => {
  const { title, badge, imageSrc, description, skills, projectUrl } = project;

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        {badge && <span className={styles.awardBadge}>{badge}</span>}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <button
          className={styles.detailsBtn}
          onClick={() => onSelectProject && onSelectProject(project)}
        >
          <FiInfo className={styles.btnIcon} />
          <span>Details & Architecture</span>
        </button>

        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewProjectBtn}
          >
            <span>Live Project</span>
            <FiExternalLink className={styles.btnIcon} />
          </a>
        ) : (
          <button className={styles.disabledBtn} disabled title="Project link will be added soon">
            <span>Link Soon</span>
            <FiClock className={styles.btnIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
