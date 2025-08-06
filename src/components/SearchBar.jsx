import { useState } from 'react'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [userInput, setUserInput] = useState('');
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(userInput); 
           
      }
      console.log(searchTerm);
    };
  const handleClick = () => {
    setSearchTerm(userInput);
    console.log(searchTerm);
  };
  const handleOnInput = (event) => {
    setUserInput(event.target.value)
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
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
}
