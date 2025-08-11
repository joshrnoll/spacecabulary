import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import UserDeck from "../components/UserDeck";
import { useEffect, useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [hasDeck, setHasDeck] = useState(false);
  const [totalCardCount, setTotalCardCount] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("userDeck")) {
      setHasDeck(true);
      setTotalCardCount(JSON.parse(localStorage.getItem("userDeck")).length);
    }
  }, []);

  return (
    <>
      {hasDeck && <h3>Total cards: {totalCardCount}</h3>}
      {!hasDeck && <h1>You have no cards!</h1>}
      <button id="add-cards" onClick={() => navigate("/add-card-page")}>
        Add Cards
      </button>
      <button id="review-cards" onClick={() => navigate("/review-page")}>
        Review Your Cards
      </button>
    </>
  );
}
