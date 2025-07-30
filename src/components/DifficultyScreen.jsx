import React from "react";
import styles from "./Styles/DifficultyScreen.module.css";

const DifficultyScreen = ({ onSelect }) => {
  const levels = ["easy", "medium", "hard"];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Play with a Random Word</h2>
      <button className={styles.button} onClick={() => onSelect("random", false)}>
        Start Random Word Game
      </button>

      <h3 className={styles.subtitle}>Play with Hints (Choose Difficulty)</h3>
      {levels.map((level) => (
        <button
          key={level}
          className={styles.button}
          onClick={() => onSelect(level, true)}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)} 
        </button>
      ))}
    </div>
  );
};

export default DifficultyScreen;
