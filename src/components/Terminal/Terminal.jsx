import React, { useState, useRef, useEffect } from "react";
import styles from "./Terminal.module.css";
import { FiTerminal, FiX, FiMinus, FiCornerDownLeft } from "react-icons/fi";

const INITIAL_WELCOME = [
  { type: "system", text: "Mohamed Adil Ansari S - Dev CLI v1.0.0 initialized." },
  { type: "system", text: "Type 'help' or click quick command chips below to explore profile." }
];

export const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(INITIAL_WELCOME);
  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [history, isOpen]);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `$ ${cmdStr}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available Commands:
  • help       : Display available CLI options
  • about      : Mohamed Adil Ansari summary & specialization
  • skills     : View full stack & CS skills
  • projects   : Award-winning project breakdown
  • experience : Internship at Nutz Technovation
  • contact    : Email, Phone, Location & Socials
  • award      : View college presentation 1st prize details
  • clear      : Clear output log`,
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: "Mohamed Adil Ansari S | B.E. Computer Science & Engineering Graduate. Full Stack Developer skilled in React JS, Node.js, Express, MongoDB, Java & C++.",
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `⚡ Tech Stack Matrix:
  - Frontend : React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design
  - Backend  : Node.js, Express.js, REST APIs, OTP Auth, Twilio API
  - Database : MongoDB, MySQL
  - Core CS  : Java, C++, Data Structures & Algorithms`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `🏆 Award-Winning Projects:
  1. Sevagan - Emergency Blood Donor Matching Platform (1st Prize Winner)
     • Tech: JS, OTP Auth, Twilio SMS API, Node.js
     • Live: https://sevagan-two.vercel.app/

  2. Sports Turf Booking Site
     • Tech: HTML, CSS, JS, Real-Time Slot Selector`,
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          text: `💼 Internship Experience:
  Role: Web Developer Intern @ Nutz Technovation (Erode)
  Duration: Jan 2024 - Mar 2024
  Summary: Developed scalable REST APIs, optimized SQL queries, and integrated frontend React views.`,
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `📬 Contact Details:
  • Email: mohamedadilansari924@gmail.com
  • Phone: +91 9363554087
  • Location: Erode, Tamil Nadu, India
  • GitHub: https://github.com/MohamedAdilAnsari
  • LinkedIn: https://www.linkedin.com/in/mohamed-adil-ansari-130872276/`,
        });
        break;

      case "award":
        newHistory.push({
          type: "output",
          text: `🏆 Awards & Honors:
  • 1st Prize Winner - Project Presentation (Association Inaugural Function)
  • 2nd Prize Winner - Project Fiesta (Engineers' Day Event)
  • Selected Participant - NEXUS'2K24 National Level Technical Symposium`,
        });
        break;

      case "clear":
        setHistory(INITIAL_WELCOME);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className={styles.wrapper}>
      {!isOpen && (
        <button
          className={styles.launcherBtn}
          onClick={() => setIsOpen(true)}
          title="Open Developer Terminal Console"
          aria-label="Open CLI Terminal"
        >
          <FiTerminal className={styles.icon} />
          <span className={styles.btnText}>dev_cli</span>
          <span className={styles.pulseDot} />
        </button>
      )}

      {isOpen && (
        <div className={styles.terminalWindow}>
          <div className={styles.titleBar}>
            <div className={styles.windowControls}>
              <button
                className={`${styles.dot} ${styles.closeDot}`}
                onClick={() => setIsOpen(false)}
              />
              <button
                className={`${styles.dot} ${styles.minDot}`}
                onClick={() => setIsOpen(false)}
              />
              <button className={`${styles.dot} ${styles.maxDot}`} />
            </div>
            <div className={styles.titleText}>
              <FiTerminal className={styles.titleIcon} />
              mohamed-ansari@portfolio:~
            </div>
            <button className={styles.closeWindowBtn} onClick={() => setIsOpen(false)}>
              <FiX />
            </button>
          </div>

          <div className={styles.body}>
            {history.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.line} ${styles[item.type] || styles.output}`}
              >
                <pre>{item.text}</pre>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className={styles.quickChips}>
            {["help", "skills", "projects", "experience", "contact", "award", "clear"].map(
              (chip) => (
                <button
                  key={chip}
                  className={styles.chip}
                  onClick={() => executeCommand(chip)}
                >
                  {chip}
                </button>
              )
            )}
          </div>

          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <span className={styles.promptStr}>$</span>
            <input
              type="text"
              className={styles.cmdInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type command (e.g. help, skills)..."
              autoFocus
            />
            <button type="submit" className={styles.sendBtn} title="Execute command">
              <FiCornerDownLeft />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
