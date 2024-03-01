import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userProfileAction } from "../redux/actions/userAction";

const AdminRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  if (user && user.role) {
    console.log(user.role);
  }

  return loggedInUser.role === 1 && user.role === 1 ? children : <Navigate to="/" />;
};

export default AdminRoute;
