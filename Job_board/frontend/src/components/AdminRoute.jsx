import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userProfileAction } from "../redux/actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminRoute = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (!userInfo) {
      toast.error("Access denied, you must login");
      navigate("/");
    }
    if (userInfo && userInfo.role === 0) {
      toast.error("Access denied, you must be a recruiter");
      navigate("/");
    }

    if (user) {
      if (
        JSON.parse(localStorage.getItem("userInfo")).role === 1 &&
        user.role === 0
      ) {
        toast.error("Nice try");
      }
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      dispatch(userProfileAction());
    }
  }, [dispatch, user]);

  if (user) {
    return loggedInUser.role === 1 && user.role === 1 ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
  }
};

export default AdminRoute;
