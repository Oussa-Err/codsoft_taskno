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
} from "../constants"


export const userReducerLogIn = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: return {
            loading: true
        }
        case USER_LOGIN_SUCCESS:
            return {
                userInfo: action.payload,
                isAuthenticated: true,
                loading: false,
            }
        case USER_LOGIN_FAIL:
            return { userInfo: null, isAuthenticated: false, error: action.payload, loading: false }
        default:
            return state;
    }
}

export const userReducerSignUp = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST: return {
            loading: true
        }
        case USER_SIGNUP_SUCCESS:
            return {
                userSignUp: action.payload,
                loading: false
            }
        case USER_SIGNUP_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}

export const userReducerProfile = (state = { user: null }, action) => {
    switch (action.type) {
        case USER_LOAD_REQUEST: return {
            loading: true
        }
        case USER_LOAD_SUCCESS:
            return {
                user: action.payload.user,
                loading: false
            }
        case USER_LOAD_FAIL:
            return { user: null, error: action.payload, loading: false }
        default:
            return state;
    }
}

export const userReducerLogout = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_REQUEST: return {
            loading: true
        }
        case USER_LOGOUT_SUCCESS:
            return {
                user: action.payload,
                loading: false
            }
        case USER_LOGOUT_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}


export const userApplyJobReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_APPLY_JOB_REQUEST: return {
            loading: true
        }
        case USER_APPLY_JOB_SUCCESS:
            return {
                userJob: action.payload,
                loading: false
            }
        case USER_APPLY_JOB_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}

export const userUploadResume = (state = {}, action) => {
    switch (action.type) {
        case USER_UPLOAD_RESUME_REQUEST: return {
            loading: true
        }
        case USER_UPLOAD_RESUME_SUCCESS:
            return {
                user: action.payload,
                loading: false
            }
        case USER_UPLOAD_RESUME_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}
