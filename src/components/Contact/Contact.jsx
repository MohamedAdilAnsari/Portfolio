import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiLoader, FiAlertCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const presets = [
  "💼 Hiring / Software Developer Role",
  "🚀 Project Collaboration",
  "💬 General Inquiry",
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: presets[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Generates WhatsApp message deep-link
  const getWhatsAppUrl = (name, email, subject, message) => {
    const text = `*New Portfolio Message!*%0A%0A*Name:* ${encodeURIComponent(name || "Visitor")}%0A*Email:* ${encodeURIComponent(email || "N/A")}%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(message || "Hi Mohamed!")}`;
    return `https://wa.me/919363554087?text=${text}`;
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return false;
    }
    const emailTrimmed = formData.email.trim().toLowerCase();
    if (!emailTrimmed) {
      setErrorMessage("Please enter your email address.");
      return false;
    }
    if (!emailTrimmed.endsWith("@gmail.com")) {
      setErrorMessage("Email address must end with @gmail.com (e.g. example@gmail.com).");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSendEmail = async (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mohamedadilansari924@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject}`,
          _captcha: "false",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setSubmittedMessage("✅ Email sent successfully to mohamedadilansari924@gmail.com!");
        setFormData({ name: "", email: "", subject: presets[0], message: "" });
        setTimeout(() => setSubmittedMessage(""), 6000);
      } else {
        // Fallback: Open default email client (mailto:) if FormSubmit requires activation
        const mailtoUrl = `mailto:mohamedadilansari924@gmail.com?subject=${encodeURIComponent(
          `[Portfolio] ${formData.subject}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setSubmittedMessage("📧 Email client opened! (Tip: Check mohamedadilansari924@gmail.com inbox to click 'Activate FormSubmit' once for direct background sending)");
        setFormData({ name: "", email: "", subject: presets[0], message: "" });
        setTimeout(() => setSubmittedMessage(""), 8000);
      }
    } catch (err) {
      console.error("Submission notice:", err);
      // Fallback: Open default mail app
      const mailtoUrl = `mailto:mohamedadilansari924@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmittedMessage("📧 Opened email client to send message!");
      setFormData({ name: "", email: "", subject: presets[0], message: "" });
      setTimeout(() => setSubmittedMessage(""), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    setErrorMessage("");
    const whatsappUrl = getWhatsAppUrl(
      formData.name,
      formData.email,
      formData.subject,
      formData.message
    );
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmittedMessage("📱 WhatsApp opened with your pre-filled message!");
    setFormData({ name: "", email: "", subject: presets[0], message: "" });
    setTimeout(() => setSubmittedMessage(""), 6000);
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contentGrid}>
        {/* Left Column: Direct Info */}
        <div className={styles.textSection}>
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>
            Feel free to reach out for software development roles, internships, or technical project collaborations!
          </p>

          <div className={styles.locationTag}>
            <FiMapPin className={styles.icon} />
            <span>Erode, Tamil Nadu, India</span>
          </div>

          <ul className={styles.links}>
            <li className={styles.link}>
              <FaWhatsapp className={`${styles.icon} ${styles.whatsappIcon}`} />
              <a href="https://wa.me/919363554087" target="_blank" rel="noopener noreferrer">
                +91 9363554087 (WhatsApp)
              </a>
            </li>
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
              <a
                href="https://www.linkedin.com/in/mohamed-adil-ansari-130872276/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mohamed-adil-ansari
              </a>
            </li>
            <li className={styles.link}>
              <FiGithub className={styles.icon} />
              <a
                href="https://github.com/MohamedAdilAnsari"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/MohamedAdilAnsari
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Interactive Quick Contact Form */}
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Send a Quick Message</h3>

          {errorMessage && (
            <div className={styles.errorAlert}>
              <FiAlertCircle className={styles.toastIcon} />
              <span>{errorMessage}</span>
            </div>
          )}

          {submittedMessage && (
            <div className={styles.toastAlert}>
              <FiCheckCircle className={styles.toastIcon} />
              <span>{submittedMessage}</span>
            </div>
          )}

          <form onSubmit={handleSendEmail} className={styles.form}>
            <div className={styles.presetChips}>
              {presets.map((preset) => (
                <button
                  type="button"
                  key={preset}
                  className={`${styles.presetChip} ${
                    formData.subject === preset ? styles.presetActive : ""
                  }`}
                  onClick={() => setFormData({ ...formData, subject: preset })}
                >
                  {preset}
                </button>
              ))}
            </div>

            <div className={styles.inputRow}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.inputField}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errorMessage) setErrorMessage("");
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={styles.inputField}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errorMessage) setErrorMessage("");
                }}
              />
            </div>

            <textarea
              placeholder="Your message..."
              className={styles.textareaField}
              rows="4"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errorMessage) setErrorMessage("");
              }}
            />

            <div className={styles.actionBtnRow}>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <FiLoader className={`${styles.btnIcon} ${styles.spinIcon}`} />
                ) : (
                  <FiSend className={styles.btnIcon} />
                )}
                <span>{isSubmitting ? "Sending..." : "Send to Email"}</span>
              </button>

              <button
                type="button"
                className={styles.whatsappBtn}
                onClick={handleSendWhatsApp}
                title="Send via WhatsApp"
              >
                <FaWhatsapp className={styles.btnIcon} />
                <span>Send to WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.copyrightRow}>
        <p>© {new Date().getFullYear()} Mohamed Adil Ansari · Software Developer</p>
      </div>
    </footer>
  );
};
