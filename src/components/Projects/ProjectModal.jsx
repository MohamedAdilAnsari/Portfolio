import React from "react";
import styles from "./ProjectModal.module.css";
import { getImageUrl } from "../../utils";
import { FiX, FiExternalLink, FiCheckCircle, FiCpu, FiLayers } from "react-icons/fi";

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        <div className={styles.headerImageWrapper}>
          <img
            src={getImageUrl(project.imageSrc)}
            alt={project.title}
            className={styles.headerImage}
          />
          {project.badge && <span className={styles.badge}>{project.badge}</span>}
        </div>

        <div className={styles.body}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>

          {project.features && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FiCheckCircle className={styles.sectionIcon} />
                Key Features
              </h3>
              <ul className={styles.featureList}>
                {project.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FiCpu className={styles.sectionIcon} />
                System Architecture
              </h3>
              <p className={styles.architectureText}>{project.architecture}</p>
            </div>
          )}

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <FiLayers className={styles.sectionIcon} />
              Technologies Used
            </h3>
            <div className={styles.skillsGrid}>
              {project.skills.map((skill, idx) => (
                <span key={idx} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.footer}>
            {project.projectUrl ? (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoBtn}
              >
                <span>Launch Live Demo</span>
                <FiExternalLink />
              </a>
            ) : (
              <span className={styles.infoNote}>
                ⚡ Demo environment active in local sandbox
              </span>
            )}
            <button className={styles.closeModalBtn} onClick={onClose}>
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
