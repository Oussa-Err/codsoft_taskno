import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserRoute, AdminRoute } from "./components/index.js";
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
  Notfound,
} from "./routes/index.js";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job" element={<Job />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
          <Route path="/user/dashboard" element={<UserRoute><Dashboard /></UserRoute>} />
          <Route path="/application" element={<UserRoute><Application /></UserRoute>} />
          <Route path="/history" element={<UserRoute><History /></UserRoute>} />
          <Route path="/information" element={<UserRoute><Information /></UserRoute>} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
