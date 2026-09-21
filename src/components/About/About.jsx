import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { FiCode, FiServer, FiDatabase, FiFigma } from "react-icons/fi";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIconContainer}>
              <FiCode className={styles.aboutIcon} />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Frontend & Full Stack Development</h3>
              <p>
                Proficient in building interactive frontend interfaces with <strong>React JS, HTML5, CSS3, and JavaScript</strong>, creating responsive, mobile-first web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIconContainer}>
              <FiServer className={styles.aboutIcon} />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Backend Engineering (Node.js & Express.js)</h3>
              <p>
                Experienced in developing server-side application logic, RESTful APIs, and secure authentication systems using <strong>Node.js and Express.js</strong>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIconContainer}>
              <FiDatabase className={styles.aboutIcon} />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Database Management (MongoDB & MySQL)</h3>
              <p>
                Hands-on experience structuring document collections in <strong>MongoDB</strong> and relational tables in <strong>MySQL</strong> for scalable data storage and query optimization.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutIconContainer}>
              <FiFigma className={styles.aboutIcon} />
            </div>
            <div className={styles.aboutItemText}>
              <h3>UI/UX Design</h3>
              <p>
                Internship experience at Nutz Technovation designing modern user interfaces, wireframes, and design systems in <strong>Figma & Canva</strong>.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
