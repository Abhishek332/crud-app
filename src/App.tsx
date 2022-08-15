import { Authenticator, Games } from "./features"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authenticator />} />
        <Route path="/games" element={<Games/>} />
      </Routes>
    </Router>
  )
}

export default App