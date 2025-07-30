import React, { useState } from "react";
import styles from "./Styles/WelcomeScreen.module.css";

const WelcomeScreen = ({ onStart }) => {
  const [name, setName] = useState("");

  const handleStart = () => {
    if (name.trim() === "") {
      alert("Please enter a valid username");
      return;
    }
    onStart(name);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Word Guessing Game!</h1>
      <input
        type="text"
        placeholder="Enter your username"
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.button} onClick={handleStart}>
        Start Game
      </button>
    </div>
  );
};

export default WelcomeScreen;
