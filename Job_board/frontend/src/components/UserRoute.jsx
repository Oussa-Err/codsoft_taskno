import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  return loggedInUser ? children : <Navigate to="/" />;
};

export default UserRoute;
