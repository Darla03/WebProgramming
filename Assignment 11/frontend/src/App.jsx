// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Personal from "./personal";
import Hobbies from "./hobbies";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Personal Info</Link> | <Link to="/hobbies">Hobbies</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

