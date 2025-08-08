import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

export default function AddCardPage() {
  const navigate = useNavigate();
  const [wordData, setWordData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const [ mockDeck, setMockDeck ] = useState([]);
      // word: "test word",
      // definition: "it poops",
    // }])


  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;

  useEffect(() => {
    console.log("Here's mockDeck! ", mockDeck);
  },[mockDeck])

  useEffect(() => {
    async function getWordData() {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // const findExample = data[0].meanings[0].definitions.find(item => item.example !== null);
          // console.log("Find Example: ",findExample);

          setWordData({
            word: searchTerm,
            definition: data[0].meanings[0].definitions[0].definition,
            partOfSpeech: data[0].meanings[0].partOfSpeech,
            // example: findExample.example
          });
        })
        .catch((err) =>
          console.error("No random words for you! Use search bar.", err)
        );
    }
    getWordData();
  }, [searchTerm]);

  function addWord() {
    
    const word = {...wordData,
      correctCount: 0,
      timeLastCorrect: new Date(),
      hidden: false,
      deckName: 'default'  };
    setWordData(word)
      

        const storage = JSON.parse(localStorage.getItem('userDeck'))
        
        if(storage) {
          storage.push(word) 
          localStorage.setItem('userDeck',JSON.stringify(storage))
          console.log('after addition:',storage)
        } else {
          localStorage.setItem('userDeck',JSON.stringify([word]))
        }
    

    setDisplayResult(false);
  }

  return (
    <>
      {displayResult && (
        <div id="search-results">
            <h1 style={{display: "inline",marginRight:"10px"}}>{wordData.word}</h1>
            <h3 style={{display: "inline"}}>({wordData.partOfSpeech})</h3>
          <p id="definition-header">
            <b>Definition: </b>
          </p>
            <i>{wordData.definition}</i>
            <br/>
            <br/>
          <button onClick={() => addWord(wordData)}>Add to Deck</button>

        </div>
      )}

      {!displayResult && Object.keys(wordData).length > 0 && ( <h1>Card Added!</h1> )}


      <br />

      <SearchBar
        setSearchTerm={setSearchTerm}
        setDisplayResult={setDisplayResult}
      />

      <br/>
      <button id="back-button" onClick={() => navigate("/")}>
        Go back!
      </button>
    </>
  );
}
