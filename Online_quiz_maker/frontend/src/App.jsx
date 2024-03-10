import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QuizProvider } from "./components/QuizContext";
import "./App.css";
import Spa from "./SPA/Spa";

function App() {
  return (
    <>
      <ToastContainer />
      <QuizProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Spa />} />
          </Routes>
        </Router>
      </QuizProvider>
    </>
  );
}

export default App;
