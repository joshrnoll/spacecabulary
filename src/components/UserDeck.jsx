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
    localStorage.setItem('userDeck',JSON.stringify(deckData))
  }, [deckData])


  const handleNextCard = () => {
    let number = index;
    // setIndex((number += 1));
    number = (number + 1) % deckData.length

    while(deckData[number].hidden){
      setIndex((number += 1));
    }
    if(!deckData[number]){
      let result = 0;
      for (let word of deckData){
        if(word.hidden){result++}
      }
      if (result === deckData.length){
        setDeckCompleted(true)
      }
      else{setIndex(0)}
    }

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
    userDeck.correctWord(currentWord);
    deckData = userDeck.getDeck();
    localStorage.setItem('userDeck',JSON.stringify(deckData))
    handleNextCard();
  };


  return (
    <>
      {!deckCompleted && (
        <div id="userDeck">
          <h2>Your Deck</h2>

          {/* {!showAnswer && deckData.length > 0 && (
              deckData
                .filter(card => !card.hidden)
                .map((card, index) => (
                  <p key={index}>{card.word}</p>
                ))
          )} */}

          {!showAnswer && deckData.length > 0 && (<p>{deckData[index].word}</p>)}
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
          {/* <button onClick={handleIncorrectClick}>
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
