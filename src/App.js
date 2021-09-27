import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🌸": "Cherry Blossom",
  "🌼": "Blossom",
  "🌹": "Rose",
  "🌷": "Tulip",
  "🌻": "Sunflower",
  "🌱": "Seedling",
  "🌾": "Sheaf of Rice",
  "☘️": "Shamrock",
  "🍁": "Maple Leaf",
  "🌳": "Deciduous Tree"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter!!</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
