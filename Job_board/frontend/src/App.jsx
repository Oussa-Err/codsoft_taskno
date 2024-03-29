import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserRoute, AdminRoute } from "./components/index.js";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./routes/Home.jsx"));
const History = lazy(() => import("./routes/History.jsx"));
const Login = lazy(() => import("./routes/Login.jsx"));
const Information = lazy(() => import("./routes/Information.jsx"));
const Signup = lazy(() => import("./routes/Signup.jsx"));
const Notfound = lazy(() => import("./routes/Notfound.jsx"));
const AdminDashboard = lazy(() => import("./routes/admin/AdminDashboard.jsx"));
const Dashboard = lazy(() => import("./routes/user/Dashboard.jsx"));
const Job = lazy(() => import("./routes/Job.jsx"));
const Jobs = lazy(() => import("./routes/Jobs.jsx"));

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-full">
              <div className="inline-block animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[--primary-text-color]"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/search/:keyword" element={<Jobs />} />
            <Route path="/job/:id" element={<Job />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route element={<AdminRoute />}>
              <Route path="/recruiter/dashboard" element={<AdminDashboard />} />
            </Route>
            <Route
              path="/user/dashboard"
              element={
                <UserRoute>
                  <Dashboard />
                </UserRoute>
              }
            />
            <Route
              path="/history"
              element={
                <UserRoute>
                  <History />
                </UserRoute>
              }
            />
            <Route
              path="/information"
              element={
                <UserRoute>
                  <Information />
                </UserRoute>
              }
            />
            <Route path="/*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
