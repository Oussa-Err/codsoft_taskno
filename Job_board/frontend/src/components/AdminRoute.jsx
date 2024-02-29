import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"))
  return loggedInUser && loggedInUser.role === 1 ? children : <Navigate to="/" />;
};

export default AdminRoute;
