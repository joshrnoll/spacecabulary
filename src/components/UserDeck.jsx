import { dummyData } from "../utils/userDeck-dummyData";
import { useState } from "react";
//import { UserDeck } from "../classes/userDeck.js";

export default function HomePage() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [deckCompleted, setDeckCompleted] = useState(false);
  const [index, setIndex] = useState(0);

  //let deckData = new UserDeck()
  let deckData = dummyData;
  let deckLength = deckData.length;
  let wordOrDefinition = "";

  if(!showAnswer) {
    wordOrDefinition = "definition"
  }else{
    wordOrDefinition = "word"
  }
  const handleNextCard = () => {
    let number = index;
    setIndex(number += 1);
    setShowAnswer(false);
    if(index === deckLength-1) {
      setDeckCompleted(true)
    }
  }
    return (
    <>
      {!deckCompleted && 
            <div id="userDeck">
        <h2>Your Deck</h2>
        {!showAnswer && <p>{dummyData[index].word}</p>}
        {showAnswer && <p>{dummyData[index].definition}</p>}
        <button onClick={handleNextCard}>Correct</button>
        <button onClick={() => showAnswer ? setShowAnswer(false) : setShowAnswer(true)}>Show {wordOrDefinition}</button>
        <button onClick={handleNextCard}>Incorrect</button>
      </div>}
       
      {deckCompleted && 
        <div id='userDeck'>
          <p>Done for the day</p>
        </div>}
    </>
  );
}
