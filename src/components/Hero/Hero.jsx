import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FiMail, FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className={styles.container}>
      {/* Dynamic Glowing Particle background effect */}
      <div className={styles.particlesContainer}>
        {[...Array(16)].map((_, i) => (
          <div key={i} className={`${styles.particle} ${styles[`p${(i % 6) + 1}`]}`} />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span>🎓 B.E - Computer Science & Engineering</span>
        </div>
        <h1 className={styles.title}>
          Hello<br />
          I'm <span className={styles.nameBlue}>Mohamed</span><br />
          <span className={styles.namePurple}>Adil Ansari S</span>
        </h1>
        <p className={styles.description}>
          Computer Science graduate & Full Stack Developer with hands-on experience building web applications using <strong>React JS, Node.js, Express.js, MongoDB, HTML, and CSS</strong>. Backed by internship experience at <strong>Nutz Technovation</strong> and strong problem-solving skills in <strong>Java, C++, and MySQL</strong>.
        </p>

        {/* CTA Buttons Row */}
        <div className={styles.btnRow}>
          <a href="#contact" className={styles.getInTouchBtn}>
            <FiMail className={styles.btnIcon} />
            <span>Get In Touch</span>
          </a>
          <a
            href="/Mohamed_Adil_Ansari_Resume.pdf"
            download="Mohamed_Adil_Ansari_Resume.pdf"
            className={styles.downloadCvBtn}
          >
            <FiDownload className={styles.btnIcon} />
            <span>Download CV</span>
          </a>
          <a href="#projects" className={styles.viewWorkBtn}>
            <span>View Work</span>
          </a>
        </div>

        {/* Social Icons Row */}
        <div className={styles.socialRow}>
          <a
            href="https://www.linkedin.com/in/mohamed-adil-ansari-130872276/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialBtn} ${styles.socialLinkedin}`}
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:mohamedadilansari924@gmail.com"
            className={`${styles.socialBtn} ${styles.socialMail}`}
            aria-label="Email"
            title="Send Email"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/MohamedAdilAnsari"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialBtn} ${styles.socialGithub}`}
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Mohamed Adil Ansari S"
          className={styles.heroImg}
        />
        <div className={styles.heroGlowRing} />
      </div>

      {/* Vibrant Ambient Glow Blurs */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
