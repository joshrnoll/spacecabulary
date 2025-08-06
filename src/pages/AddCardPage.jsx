import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

export default function AddCardPage() {
  const navigate = useNavigate();
  const [wordData, setWordData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
  //     .then((res) => res.json())
  //     .then((data) => setWordData(data))
  //     .catch((err) =>
  //       console.error("No random words for you! Use search bar.", err)
  //     );
  // }, [searchTerm]);

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button id="back-button" onClick={() => navigate("/")}>
        Go back!
      </button>
    </>
  );
}
