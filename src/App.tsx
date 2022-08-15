import { Authenticator } from "./pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authenticator />} />
        <Route path="/games" element={<p>This is game page</p>} />
      </Routes>
    </Router>
  )
}

export default App