import UserDeck from "../components/UserDeck";
import { useNavigate } from "react-router-dom";

export default function ReviewPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Review Page</h1>
      <UserDeck></UserDeck>
      <br />
      <button onClick={() => navigate("/view-all-cards")}>
        View All Cards
      </button>
    </>
  );
}
