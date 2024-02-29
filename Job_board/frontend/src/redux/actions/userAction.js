import axios from 'axios';
import { toast } from "react-toastify";
import {
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS
} from '../constants/userConstant';

axios.interceptors.request.use(config => {
    config.withCredentials = true;
    return config;
});

export const userLogInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
        const { data } = await axios.post("http://127.0.0.1:8080/api/v1/login", user, { withCredentials: true });
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });
        toast.success("Login Successfully!");
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data.message
        });
        toast.error(error.response.data.message);
    }
}

export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const { data } = await axios.post("http://127.0.0.1:8080/api/v1/signup", user);
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        });
        console.log("toast executed")
        toast.success("Registered Successfully!");
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.message
        });
        toast.error(error.response.data.message);
    }
}

export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        localStorage.removeItem('userInfo');
        const { data } = await axios.get("http://127.0.0.1:8080/api/v1/logout", {
            headers: {
                Cookie: req.headers.cookie,
            }
        });
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Log out successfully!");
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.message
        });
        toast.error(error.response.data.message);
    }
}


export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("http://127.0.0.1:8080/api/v1/me");
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        console.log(error)
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.message
        });
    }
}