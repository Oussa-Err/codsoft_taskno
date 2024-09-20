import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userProfileAction } from "../redux/actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminRoute = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  const { user, loading, error } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if user is logged in when component mounts
  useEffect(() => {
    if (!loggedInUser) {
      toast.error("Access denied, you must login");
      navigate("/login");
    } else if (loggedInUser.role !== 1) {
      toast.error("Access denied, you must be a recruiter");
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  // Fetch user profile if not already loaded
  useEffect(() => {
    if (!user && !loading && !error) {
      dispatch(userProfileAction());
    }
  }, [dispatch, user, loading, error]);

  // Show loading spinner while user profile is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if the user is an admin
  if (user && user.role === 1) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminRoute;
