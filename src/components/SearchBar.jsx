export default function SearchBar({ searchTerm, setSearchTerm }) {
  let userInput = "";

  return (
    <>
      <div id="search-bar">
        <input
          type="text"
          value={userInput}
          onInput={(event) => (userInput = event.target.value)}
          placeholder="Search for a word."
          className="search-input"
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              setSearchTerm(userInput);
              console.log(searchTerm);
            }
          }}
        />
        <button
          onClick={() => {
            setSearchTerm(userInput);
            console.log(searchTerm);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}
