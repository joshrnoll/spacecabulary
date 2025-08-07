import "../styles/App.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>You have no cards!</h1>
      <button id="add-cards" onClick={() => navigate("/add-card-page")}>
        Add Cards
      </button>
    </>
  );
}
