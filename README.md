# 🎮 Word Guessing Game / OIT CODE CHALLENGE

A simple interactive **single-player word guessing** game where players try to guess a hidden word by entering letters.  
The game includes **two modes**:
- **Random Word Mode (API)** – fetches random words from the Datamuse API.
- **Hint Mode (Easy/Medium/Hard)** – uses a curated hardcoded list with hints.

---

## 🌐 Live Demo  

[🎮 Play the Word Guessing Game](https://word-guess-game-azure-pi.vercel.app/)

---

## 🚀 Features
- ✅ Fetches random words dynamically (API mode)
- ✅ Play with hints (Easy, Medium, Hard)
- ✅ Tracks guessed letters and attempts
- ✅ Win/Loss detection with replay option
- ✅ Persistent username & best score (LocalStorage)
- ✅ Clean UI with modular styling
- ✅ Main Menu to restart from Welcome Screen

---

## 🛠️ Technologies Used
- **React (Vite)** – frontend framework
- **CSS Modules** – component-level styling
- **Datamuse API** – random word fetching
- **LocalStorage** – store username & best score

---

## 📂 Project Structure
```
src/
├── components/
│ ├── WelcomeScreen.jsx
│ ├── DifficultyScreen.jsx
│ ├── GameBoard.jsx
│ ├── EndScreen.jsx
│ └── Styles/ (CSS Modules for each screen)
│
├── utils/
│ └── api.js # API logic & hardcoded word list
├── App.jsx
└── main.jsx
```
---

## ⚙️ Installation & Running Locally

1. Clone the repository
   
 ```
   git clone https://github.com/jotacalderon94/WordGuessGame.git

   cd WordGuessGame
 ```
2. Open a terminal in the project folder and Install dependencies:
```
   npm install
```
3. Start development server:
```
   npm run dev
```
4. Open your browser at http://localhost:5173

---

## 🔒 API Usage & Security


The Datamuse API is public and doesn’t require authentication.

No secret keys are used in this project.

AWS RDS or other backend integrations can be added as an optional enhancement.

---

## 🎯 Optional Future Enhancements


✅ AWS RDS Integration (store user data in a database)

✅ Backend API (Node/FastAPI) for secure word fetching and score storage

✅ Custom Dictionary API for better random word control

✅ Multiplayer Mode

---

## 📌 Notes

Random Word Mode: The API returns words of varying difficulty (filtered but not perfect).

Hint Mode: Difficulty selection works only for the hardcoded word list, since I can add the hints manually, adding other logic or maybe a second api from a dictionary can help to add hints for the random words.

Offline Fallback: If the API fails, the game uses hardcoded words.

---

## 👤 Author

Jose Calderon
Student Developer
