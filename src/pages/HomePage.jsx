import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import UserDeck from "../components/UserDeck.jsx";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <UserDeck></UserDeck>
      <h1>You have no cards!</h1>
      <button id="add-cards" onClick={() => navigate("/add-card-page")}>
        Add Cards
      </button>
    </>
  );
}

export default HomePage;
