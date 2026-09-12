import React from "react";
import styles from "./Contact.module.css";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out for software development roles, internships, or project collaborations!</p>
        <div className={styles.locationTag}>
          <FiMapPin className={styles.icon} />
          <span>Erode, Tamil Nadu, India</span>
        </div>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <FiPhone className={styles.icon} />
          <a href="tel:+919363554087">+91 9363554087</a>
        </li>
        <li className={styles.link}>
          <FiMail className={styles.icon} />
          <a href="mailto:mohamedadilansari924@gmail.com">mohamedadilansari924@gmail.com</a>
        </li>
        <li className={styles.link}>
          <FiLinkedin className={styles.icon} />
          <a href="https://www.linkedin.com/in/mohamed-adil-ansari-130872276/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/mohamed-adil-ansari
          </a>
        </li>
        <li className={styles.link}>
          <FiGithub className={styles.icon} />
          <a href="https://github.com/MohamedAdilAnsari" target="_blank" rel="noopener noreferrer">
            github.com/MohamedAdilAnsari
          </a>
        </li>
      </ul>
    </footer>
  );
};
