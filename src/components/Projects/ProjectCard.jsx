import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { FiExternalLink, FiClock } from "react-icons/fi";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, projectUrl },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
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
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewProjectBtn}
          >
            <span>View Project</span>
            <FiExternalLink className={styles.btnIcon} />
          </a>
        ) : (
          <button className={styles.disabledBtn} disabled title="Project link will be added soon">
            <span>Link Coming Soon</span>
            <FiClock className={styles.btnIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
