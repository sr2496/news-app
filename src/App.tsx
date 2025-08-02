import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewsWrapper from './components/NewsWrapper'
import LoadingBar from "react-top-loading-bar"

const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsWrapper setProgress={setProgress} pageSize="10" country="us" />}></Route>
        <Route path="/news/:category" element={<NewsWrapper setProgress={setProgress} pageSize="20" country="us" />}></Route>
      </Routes>
    </Router>
  )
}
export default App;
