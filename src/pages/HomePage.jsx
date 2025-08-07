import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import UserDeck from '../components/UserDeck';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <UserDeck></UserDeck>
      <br/>
      <h1>You have no cards!</h1>
      <button id="add-cards" onClick={() => navigate("/add-card-page")}>
        Add Cards
      </button>
    </>
  );
}
