import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userProfileAction } from "../redux/actions/userAction";
import { toast } from "react-toastify";


const AdminRoute = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  
  if (JSON.parse(localStorage.getItem("userInfo")).role === 0) {
    toast.error("You must be an admin");
  }

  useEffect(() => {
    dispatch(userProfileAction);
  }, [dispatch]);

  console.log(loggedInUser.role);
  console.log(user);
  if (user) {
    return loggedInUser.role === 1 && user.role === 1 ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
  }
};

export default AdminRoute;
