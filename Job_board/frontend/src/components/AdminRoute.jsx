import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.logIn);
  return userInfo && userInfo.role === 1 ? children : <Navigate to="/" />;
};

export default AdminRoute;
