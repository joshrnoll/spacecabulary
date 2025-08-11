import UserDeck from "../components/UserDeck";
import { useNavigate } from "react-router-dom";

export default function ReviewPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Review Page</h1>
      <UserDeck />
      <br />
      <button
        className="standard-btn"
        id="back-button"
        onClick={() => navigate("/")}
      >
        Go back!
      </button>
      <button
        className="standard-btn"
        onClick={() => navigate("/view-all-cards")}
      >
        View All Cards
      </button>
    </>
  );
}
