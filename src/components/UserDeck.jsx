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

  const handleNextCard = () => {
    let number = index;
    setIndex((number += 1));
    console.log(`Length ${deckData.length}`);
    console.log(`Index ${index}`);
    setShowAnswer(false);

    const completed = deckData.find((element) => element.hidden === false);
    if (completed) {
      setDeckCompleted(false);
    } else {
      setDeckCompleted(true);
    }
  };

  const handleCorrect = () => {
    let currentWord = deckData[index];
    console.log(currentWord);
    deckData.correctWord(currentWord);
    deckData.hideWord(currentWord);
    handleNextCard();
  };

  useEffect(() => {
    if (deckCompleted) return;
    let number = index;
    if (deckData[index].hidden) {
      setIndex((number += 1));
    }
    if (index >= deckData.length) {
      if (!deckCompleted) {
        console.log(deckCompleted);
        setIndex(0);
      }
    }
  }, [index]);

  return (
    <>
      {!deckCompleted && (
        <div id="userDeck">
          <h2>Your Deck</h2>
          {!showAnswer && <p>{deckData[index].word}</p>}
          {showAnswer && <p>{deckData[index].definition}</p>}
          <button onClick={handleCorrect}>Correct</button>
          <button
            onClick={() =>
              showAnswer ? setShowAnswer(false) : setShowAnswer(true)
            }
          >
            Show {wordOrDefinition}
          </button>
          <button onClick={handleNextCard}>Incorrect</button>
          {/* <button
            onClick={() => {
              deckData.hideWords();
              console.log(deckData);
            }}
          >
            Hide words
          </button> */}
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
