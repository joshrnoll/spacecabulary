import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import { useState, useContext, createContext } from "react";

const DeckContext = createContext();
export const useDeckContext = () => useContext(DeckContext);

function HomePage() {
  const navigate = useNavigate();
  const [reviewDeck, setReviewDeck] = useState(["yep", "more yep"]);

  return (
    <>
      <DeckContext.Provider
        value={{
          reviewDeck,
        }}
      >
        <h1>You have no cards!</h1>
        <button id="add-cards" onClick={() => navigate("/add-card-page")}>
          Add Cards
        </button>
      </DeckContext.Provider>
    </>
  );
  );
}

export default HomePage;
export default HomePage;
