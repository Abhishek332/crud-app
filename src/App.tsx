import { Authenticator, Games, DropDown } from "./features"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authenticator />} />
        <Route path="/games" element={<Games />} />
        <Route path='/dropdown' element={<DropDown />} />
      </Routes>
    </Router>
  )
}

export default App