import { dummyData } from "../utils/userDeck-dummyData";
import { useState } from "react";

export default function HomePage() {
  const [showAnswer, setShowAnswer] = useState(false);

  let deckData = dummyData;

  return (
    <>
      <div id="userDeck">
        <h2>Your Deck</h2>
        {!showAnswer && <p>dummyData[0].word</p>}
        {showAnswer && <p>dummyData[0].definition</p>}
        <button>Correct</button>
        <button>Show Answer</button>
        <button>Incorrect</button>
      </div>
    </>
  );
}
