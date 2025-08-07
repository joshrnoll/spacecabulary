import { useState } from "react";

export default function SearchBar({ setSearchTerm, setDisplayResult }) {
  const [userInput, setUserInput] = useState("");
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(userInput);
      setDisplayResult(true);
    }
  };

  const handleClick = () => {
    setSearchTerm(userInput);
    setDisplayResult(true);
  };

  const handleOnInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <div id="search-bar">
        <input
          type="text"
          value={userInput}
          onChange={handleOnInput}
          placeholder="Search for a word."
          className="search-input"
          onKeyUp={handleEnter}
        />
        <br/>
        <br/>
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
}
