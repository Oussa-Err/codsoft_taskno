import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Jobs,
  Job,
  Dashboard,
  Signup,
  Login,
  Application,
  History,
  Information,
  Notfound
} from "./routes/index.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job" element={<Job />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/application" element={<Application />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/information" element={<Information />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
