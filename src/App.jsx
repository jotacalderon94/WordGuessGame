import React, { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import DifficultyScreen from "./components/DifficultyScreen";
import GameBoard from "./components/GameBoard";
import EndScreen from "./components/EndScreen";

function App() {
  //const [username, setUsername] = useState(() => localStorage.getItem("username") || null);
  const [username, setUsername] = useState(null); // Initialize username as null, will be set when user starts the game and a new repo. so user doesnt have to clear local storage
  const [gameConfig, setGameConfig] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [bestScore, setBestScore] = useState(() => parseInt(localStorage.getItem("bestScore")) || 0);

  // ✅ Save username when set
  const handleUsername = (name) => {
    localStorage.setItem("username", name);
    setUsername(name);
  };

  // ✅ Save best score if higher
  const handleGameEnd = (result, word, score) => {
    if (score > bestScore) {
      localStorage.setItem("bestScore", score);
      setBestScore(score);
    }
    setGameResult({ result, word, score });
  };

  const handleReplay = () => {
    setGameResult(null);
    setGameConfig(null);
  };

  const handleMainMenu = () => {
  setGameResult(null);
  setGameConfig(null); // Allows to go back to difficulty selection, other way I'll get stuck
  setUsername(null); // Reset username to go back to welcome screen
  localStorage.removeItem("username"); // Clear username from local storage but the best score will stay there, *** check if I want it***
};

  return (
    <div>
      {!username ? (
        <WelcomeScreen onStart={handleUsername} />
      ) : !gameConfig ? (
        <DifficultyScreen onSelect={(difficulty, useHints) => setGameConfig({ difficulty, useHints })} />
      ) : !gameResult ? (
        <GameBoard username={username} config={gameConfig} onGameEnd={handleGameEnd} />
      ) : (
        <EndScreen
          result={gameResult.result}
          word={gameResult.word}
          score={gameResult.score}
          bestScore={bestScore}
          onReplay={handleReplay}
          onMainMenu={handleMainMenu}
        />
      )}
    </div>
  );
}

export default App;
