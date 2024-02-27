import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.loggedIn);
  return user && userInfo.role === 1 ? children : <Navigate to="/" />;
};

export default AdminRoute;
