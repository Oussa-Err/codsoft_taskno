import {
    USER_LOAD_FAIL,
    USER_LOAD_RESET,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_RESET,
    USER_LOGOUT_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_RESET,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_RESET,
    USER_SIGNUP_SUCCESS,
    USER_APPLY_JOB_SUCCESS,
    USER_APPLY_JOB_FAIL,
    USER_APPLY_JOB_RESET
} from "../constants"


export const userReducerLogIn = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                userInfo: action.payload,
                isAuthenticated: true
            }
        case USER_LOGIN_FAIL:
            return { userInfo: null, isAuthenticated: false, error: action.payload }
        case USER_LOGIN_RESET:
            return {}
        default:
            return state;
    }
}

export const userReducerSignUp = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_SUCCESS:
            return {
                userSignUp: action.payload,
            }
        case USER_SIGNUP_FAIL:
            return { error: action.payload }
        case USER_SIGNUP_RESET:
            return {}
        default:
            return state;
    }
}

export const userReducerProfile = (state = { user: null }, action) => {
    switch (action.type) {
        case USER_LOAD_SUCCESS:
            return {
                user: action.payload.user,
            }
        case USER_LOAD_FAIL:
            return { user: null, error: action.payload }
        case USER_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

export const userReducerLogout = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_SUCCESS:
            return {
                user: action.payload,
            }
        case USER_LOGOUT_FAIL:
            return { error: action.payload }
        case USER_LOGOUT_RESET:
            return {}
        default:
            return state;
    }
}


export const userApplyJobReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_APPLY_JOB_SUCCESS:
            return {
                loading: false,
                userJob: action.payload,
            }
        case USER_APPLY_JOB_FAIL:
            return { loading: false, error: action.payload }
        case USER_APPLY_JOB_RESET:
            return {}
        default:
            return state;
    }

}
