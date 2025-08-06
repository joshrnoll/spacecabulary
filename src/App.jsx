import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddCardPage from './pages/AddCardPage'
import ReviewPage from './pages/ReviewPage'

function App() {

  return (
    <>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/review-page" element={<ReviewPage/>} />
          <Route path="/add-card-page" element={<AddCardPage/>} />
        </Routes>
    </>
  )
}

export default App
