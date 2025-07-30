import React, { useState, useEffect } from "react";
import styles from "./Styles/GameBoard.module.css";
import { getRandomHardcodedWord, fetchWordFromAPI } from "../utils/api";

const GameBoard = ({ username, config, onGameEnd }) => {
  const [word, setWord] = useState("");
  const [maskedWord, setMaskedWord] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(7);
  const [guess, setGuess] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [hint, setHint] = useState("");

  //  Fetch word when component mounts
  useEffect(() => {
  async function loadWord() {
    let chosen;
    if (config.useHints) {
      // ✅ Hardcoded with hints
      chosen = getRandomHardcodedWord(config.difficulty);
    } else if (config.difficulty === "random") {
      // ✅ Random API word (no difficulty)
      chosen = await fetchWordFromAPI();
    } else {
      // ✅ Just in case, fallback to hardcoded hard
      chosen = getRandomHardcodedWord("hard");
    }
    setWord(chosen.word.toLowerCase());
    setHint(chosen.hint);
    setMaskedWord("_ ".repeat(chosen.word.length).trim());
  }
  loadWord();
}, [config]);

  const handleGuess = () => {
    if (!guess.match(/^[a-zA-Z]$/)) {
      alert("Enter a single letter");
      return;
    }
    const letter = guess.toLowerCase();
    if (previousGuesses.includes(letter)) {
      alert("You already guessed that");
      return;
    }

    const updatedGuesses = [...previousGuesses, letter];
    setPreviousGuesses(updatedGuesses);

    if (word.includes(letter)) {
      // Reveal letter
      const revealed = word.split("").map(l => updatedGuesses.includes(l) ? l : "_").join(" ");
      setMaskedWord(revealed);

      // Check win
      if (!revealed.includes("_")) {
      onGameEnd("win", word, remainingAttempts * 10);
      }
    } else {
      // Wrong guess
      const attempts = remainingAttempts - 1;
      setRemainingAttempts(attempts);
      if (attempts <= 0) {
      onGameEnd("lose", word, 0);
    }
  }

    setGuess("");
  };

  return (
    <div className={styles.board}>
      <h2>Hello {username}!</h2>
      <h3>Difficulty: {config.difficulty}</h3>
      <p>Word: <span className={styles.word}>{maskedWord}</span></p>
      <p>Attempts Left: <strong>{remainingAttempts}</strong></p>
      <p>Guessed Letters: {previousGuesses.join(", ")}</p>

      <input
        type="text"
        maxLength="1"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter a letter"
      />
      <button onClick={handleGuess}>Guess</button>

      {config.useHints && <button onClick={() => alert(hint)}>Show Hint</button>}
    </div>
  );
};

export default GameBoard;