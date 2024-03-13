import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QuizProvider } from "./components/QuizContext";
import Spa from "./SPA/Spa";
import PageNotFound from "./components/NotFound";

function App() {
  return (
    <>
      <ToastContainer />
      <QuizProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Spa />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </QuizProvider>
    </>
  );
}

export default App;
