import { useNavigate } from 'react-router-dom'

export default function AddCardPage(){

  const navigate = useNavigate();

  return(
    <>
    <h1>addcardpage</h1>
          <button id="back-button" onClick={() => navigate("/")}>Go back!</button>
    </>
  )
}
