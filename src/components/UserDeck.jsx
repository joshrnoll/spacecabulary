import { useState, useEffect } from "react";
import { UserDeck } from "../classes/userDeck.js";

export default function HomePage() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [deckCompleted, setDeckCompleted] = useState(false);
  const [index, setIndex] = useState(0);

  let userDeck = new UserDeck();
  let deckData = userDeck.getDeck();

  console.log(deckData);

  let wordOrDefinition = "";

  if (!showAnswer) {
    wordOrDefinition = "definition";
  } else {
    wordOrDefinition = "word";
  }

  useEffect(() => {
    localStorage.setItem("userDeck", JSON.stringify(deckData));
  }, [deckData]);

  const handleCorrect = () => {
    userDeck.markCorrectWord(deckData[index]);
    deckData = userDeck.getDeck();
    localStorage.setItem("userDeck", JSON.stringify(deckData));
    handleNextCard();
  };

  const handleIncorrect = () => {
    handleNextCard();
  };

  const handleNextCard = () => {
    let nextHiddenFalseIndex = deckData
      .slice(index + 1)
      .findIndex((word) => !word.hidden);

    if (nextHiddenFalseIndex !== -1) {
      nextHiddenFalseIndex += index + 1;
    } else {
      nextHiddenFalseIndex = deckData.findIndex((word) => !word.hidden);
    }

    if (nextHiddenFalseIndex !== -1) {
      setIndex(nextHiddenFalseIndex);
      setShowAnswer(false);
      setDeckCompleted(false);
    } else {
      setDeckCompleted(true);
    }
  };

  useEffect(() => {
    console.log(`index updated.`);
  }, [index]);

  return (
    <>
      {!deckCompleted && (
        <div id="userDeck">
          <h2>Your Deck</h2>

          {!showAnswer && deckData.length > 0 && <p>{deckData[index].word}</p>}
          {showAnswer && <p>{deckData[index].definition}</p>}

          <button className="standard-btn" onClick={handleCorrect}>
            Correct
          </button>
          <button
            onClick={() =>
              showAnswer ? setShowAnswer(false) : setShowAnswer(true)
            }
          >
            Show {wordOrDefinition}
          </button>

          <button className="standard-btn" onClick={handleNextCard}>
            Incorrect
          </button>
          <button className="standard-btn" onClick={handleIncorrect}>
            Hide words
          </button>
        </div>
      )}

      {deckCompleted && (
        <div id="userDeck">
          <p>Done for the day</p>
        </div>
      )}
    </>
  );
}
