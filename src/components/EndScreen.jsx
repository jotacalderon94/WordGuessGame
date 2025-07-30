import React from "react";
import styles from "./Styles/EndScreen.module.css";

const EndScreen = ({ result, word, score, bestScore, onReplay, onMainMenu }) => {
  return (
    <div className={styles.end}>
      <h1>{result === "win" ? "🎉 You Won!" : "💀 You Lost!"}</h1>
       <br />
      <p>The word was: <strong>{word}</strong></p>
      <br />
      <p>Your Score: <strong>{score}</strong></p>
       <br />
      <p>🏆 Best Score: <strong>{bestScore}</strong></p>

      <div>
        <button onClick={onReplay}>Play Again</button>
        <button onClick={onMainMenu}>Main Menu</button>
      </div>
    </div>
  );
};

export default EndScreen;
