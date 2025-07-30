export const hardcodedWords = {
  easy: [
    { word: "tree", hint: "I can have fruits hanging on me" },
    { word: "moon", hint: "I shine at night but not on my own" },
    { word: "book", hint: "I have many pages and tell stories" }
  ],
  medium: [
    { word: "bridge", hint: "I connect two places" },
    { word: "castle", hint: "A fortified building for royalty" },
    { word: "planet", hint: "I orbit around a star" }
  ],
  hard: [
    { word: "computer", hint: "You use me to code and browse" },
    { word: "mountain", hint: "I am tall and hard to climb" },
    { word: "airplane", hint: "I fly through the sky carrying people" }
  ]
};

// ✅ Returns a random word from hardcoded list
export function getRandomHardcodedWord(difficulty) {
  const words = hardcodedWords[difficulty];
  return words[Math.floor(Math.random() * words.length)];
}

// ✅ Fetches a random word from Random Word API (no difficulty)
export async function fetchWordFromAPI() {
  try {
    const response = await fetch("https://api.datamuse.com/words?sp=*&max=500");
    const data = await response.json();

    // Filter to remove weird/complex terms
    const filtered = data
      .map(d => d.word.toLowerCase())
      .filter(w =>
        w.length >= 4 &&
        w.length <= 10 &&
        /^[a-z]+$/.test(w) &&
        !w.includes(" ") &&
        !w.includes("-") &&
        !w.endsWith("ly") // avoid strange adverbs
      );

    if (filtered.length === 0) {
      console.warn("⚠️ No valid words, fallback to hardcoded HARD");
      return getRandomHardcodedWord("hard");
    }

    const word = filtered[Math.floor(Math.random() * filtered.length)];
    console.log(`✅ Selected API Random Word: ${word}`);
    return { word, hint: "No hint available" };

  } catch (err) {
    console.warn("❌ API failed, fallback to hardcoded HARD:", err);
    return getRandomHardcodedWord("hard");
  }
}
