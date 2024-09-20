import axios from "axios";
import { toast } from "react-toastify";
import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_APPLY_JOB_REQUEST,
  USER_APPLY_JOB_SUCCESS,
  USER_APPLY_JOB_FAIL,
  USER_UPLOAD_RESUME_REQUEST,
  USER_UPLOAD_RESUME_SUCCESS,
  USER_UPLOAD_RESUME_FAIL,
} from "../constants";

axios.interceptors.request.use((config) => {
  config.withCredentials = true;
  return config;
});

axios.defaults.baseURL = `http://127.0.0.1:8080/api/v1`;
// axios.defaults.baseURL = `${import.meta.env.VITE_BACKEND_URI}/api/v1`;

export const userLogInAction = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await axios.post("/login", user);
    localStorage.setItem("userInfo", JSON.stringify(data));
    setTimeout(
      () =>
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
        }),
      1000
    );
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response?.data?.message,
    });
    toast.error(error.response?.data?.message);
  }
};

export const userSignUpAction = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });
    const { data } = await axios.post("/signup", user);
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
    toast.info("Please login to proceed.");
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.response?.data?.message,
    });
    toast.error(error.response?.data?.message);
  }
};

export const userLogoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });
    localStorage.removeItem("userInfo");
    const { data } = await axios.get("/logout");
    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.response?.data?.message,
    });
    toast.error(error.response?.data?.message);
  }
};

export const userProfileAction = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOAD_REQUEST,
    });
    const { data } = await axios.get("/me");
    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (error?.response?.data?.status === "fail") {
      dispatch(userLogoutAction());
    }
    dispatch({
      type: USER_LOAD_FAIL,
      payload: error.response?.data?.message,
    });
    toast.error(error.response?.data?.message);
  }
};

export const userApplyJobAction = (job) => async (dispatch) => {
  try {
    dispatch({
      type: USER_APPLY_JOB_REQUEST,
    });
    const { data } = await axios.post("/user/apply", job);
    dispatch({
      type: USER_APPLY_JOB_SUCCESS,
      payload: data,
    });
    toast.success(
      "You Have Applied Successfully for this Job!\nCheck your Email"
    );
  } catch (error) {
    dispatch({
      type: USER_APPLY_JOB_FAIL,
      payload: error?.response?.data?.message,
    });
    toast.error(error?.response?.data?.message);
  }
};

export const userUploadResume = (resume) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPLOAD_RESUME_REQUEST,
    });
    const { data } = await axios.post(`/user/resume/upload`, resume, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setTimeout(
      () =>
        dispatch({
          type: USER_UPLOAD_RESUME_SUCCESS,
          payload: data,
        }),
      2000
    );
    toast.success("Resume uploaded!");
  } catch (error) {
    dispatch({
      type: USER_UPLOAD_RESUME_FAIL,
      payload: error.response?.data?.message,
    });
    toast.error(error.response?.data?.message);
  }
};
