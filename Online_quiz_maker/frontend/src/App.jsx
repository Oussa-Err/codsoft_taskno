import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import Spa from "./SPA/Spa";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Spa />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
