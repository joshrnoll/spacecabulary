import { useState, useEffect } from "react";
import { UserDeck } from "../classes/userDeck.js";

export default function HomePage() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [deckCompleted, setDeckCompleted] = useState(false);
  const [index, setIndex] = useState(0);

  let deckData = new UserDeck();

  console.log(deckData);
  let deckLength = deckData.length;
  let wordOrDefinition = "";

  if (!showAnswer) {
    wordOrDefinition = "definition";
  } else {
    wordOrDefinition = "word";
  }
  const handleNextCard = () => {
    let number = index;
    setIndex((number += 1));
    console.log(`Length ${deckData.words.length}`);
    console.log(`Index ${index}`);
    setShowAnswer(false);
    let result = 0;
    for (let word of deckData.words) {
      if (word.hidden) {
        result += 1;
      }
      if (result === deckData.words.length) {
        setDeckCompleted(true);
      }
    }
  };
  const handleCorrect = () => {
    let currentWord = deckData.words[index];
    console.log(currentWord);
    deckData.correctWord(currentWord);
    deckData.hideWord(currentWord);
    handleNextCard();
  };
  useEffect(() => {
    if (deckCompleted) return;
    let number = index;
    if (deckData.words[index].hidden) {
      setIndex((number += 1));
    }
    if (index >= deckData.words.length) {
      if (!deckCompleted) {
        console.log(deckCompleted);
        setIndex(0);
      }
    }
  }, [index]);

  return (
    <>
      {!deckCompleted && !deckData.words[index].hidden && (
        <div id="userDeck">
          <h2>Your Deck</h2>
          {!showAnswer && <p>{deckData.words[index].word}</p>}
          {showAnswer && <p>{deckData.words[index].definition}</p>}
          <button onClick={handleCorrect}>Correct</button>
          <button
            onClick={() =>
              showAnswer ? setShowAnswer(false) : setShowAnswer(true)
            }
          >
            Show {wordOrDefinition}
          </button>
          <button onClick={handleNextCard}>Incorrect</button>
          <button
            onClick={() => {
              deckData.hideWords();
              console.log(deckData);
            }}
          >
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
