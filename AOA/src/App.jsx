import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LorePage from "./Components/LorePage";
import People from "./Components/People";

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lorepage" element={<LorePage />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;