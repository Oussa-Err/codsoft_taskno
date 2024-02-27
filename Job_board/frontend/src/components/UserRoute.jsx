import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => state.loggedIn);
  return user ? children : <Navigate to="/" />;
};

export default UserRoute;
