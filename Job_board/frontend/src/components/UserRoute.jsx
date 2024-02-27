import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.logIn);
  return userInfo ? children : <Navigate to="/" />;
};

export default UserRoute;
