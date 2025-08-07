import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

export default function AddCardPage() {
  const navigate = useNavigate();
  const [wordData, setWordData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayResult, setDisplayResult] = useState(false);

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
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
            // partOfSpeech: findExample.partOfSpeech,
            // example: findExample.example
          });
        })
        .catch((err) =>
          console.error("No random words for you! Use search bar.", err)
        );
    }
    getWordData();
  }, [searchTerm]);

  useEffect(() => {
    console.log(`word:`, searchTerm);
    console.log(`definition:`, wordData.definition);
    // console.log(`partOfSpeech:`, wordData.partOfSpeech);
    // console.log(`example:`, wordData.example);
  }, [wordData]);

  return (
    <>
      {(displayResult && (<div id="search-results">
        <h1>
          <b>{wordData.word}</b>
        </h1>
        <p id="definition-header">
          <b>Definition: </b>
        </p>
        <p>
          <i>"{wordData.definition}"</i>
        </p >
      </div>))}


      <SearchBar setSearchTerm={setSearchTerm} setDisplayResult={setDisplayResult} />
      <button id="back-button" onClick={() => navigate("/")}>
        Go back!
      </button>

    </>
  );
}
