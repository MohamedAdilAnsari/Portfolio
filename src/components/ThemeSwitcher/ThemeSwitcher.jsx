import React, { useState, useEffect } from "react";
import styles from "./ThemeSwitcher.module.css";
import { FiSun, FiMoon, FiZap, FiGrid } from "react-icons/fi";
import { FaFire } from "react-icons/fa";

const themes = [
  {
    id: "cyber",
    name: "Cyber Cyan",
    icon: <FiZap />,
    colors: {
      "--color-primary": "#3b82f6",
      "--color-secondary": "#818cf8",
      "--color-accent": "#c084fc",
      "--color-dark": "#090a16",
      "--color-bg": "#05060f",
    },
  },
  {
    id: "matrix",
    name: "Matrix Emerald",
    icon: <FiGrid />,
    colors: {
      "--color-primary": "#10b981",
      "--color-secondary": "#34d399",
      "--color-accent": "#6ee7b7",
      "--color-dark": "#04150e",
      "--color-bg": "#020b07",
    },
  },
  {
    id: "crimson",
    name: "Crimson Flare",
    icon: <FaFire />,
    colors: {
      "--color-primary": "#f43f5e",
      "--color-secondary": "#fb7185",
      "--color-accent": "#fda4af",
      "--color-dark": "#18060c",
      "--color-bg": "#0c0205",
    },
  },
  {
    id: "amber",
    name: "Sunset Amber",
    icon: <FiSun />,
    colors: {
      "--color-primary": "#f59e0b",
      "--color-secondary": "#fbbf24",
      "--color-accent": "#fde68a",
      "--color-dark": "#160d03",
      "--color-bg": "#0b0601",
    },
  },
];

export const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState("cyber");
  const [isOpen, setIsOpen] = useState(false);

  const applyTheme = (themeId) => {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;

    setActiveTheme(themeId);
    Object.entries(theme.colors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Theme & Glow"
        aria-label="Theme Palette Switcher"
      >
        <FiZap className={styles.icon} />
        <span className={styles.btnText}>Theme</span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuHeader}>
            <span>Palette Customizer</span>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className={styles.themeList}>
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`${styles.themeOption} ${
                  activeTheme === theme.id ? styles.active : ""
                }`}
                onClick={() => applyTheme(theme.id)}
              >
                <span className={styles.themeIcon}>{theme.icon}</span>
                <span className={styles.themeName}>{theme.name}</span>
                <span
                  className={styles.colorDot}
                  style={{ backgroundColor: theme.colors["--color-primary"] }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
