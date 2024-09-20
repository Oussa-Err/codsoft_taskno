import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  let loggedInUser;
  try {
    loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  } catch (error) {
    console.error("Error parsing user info from localStorage", error);
    loggedInUser = null;
  }

  return loggedInUser ? children : <Navigate to="/login" />;
};

export default UserRoute;
