import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    userReducerProfile,
    userReducerLogIn,
    userReducerLogout,
    userReducerSignUp
} from './reducers/userReducer';

const reducer = combineReducers({
    logIn: userReducerLogIn,
    logOut: userReducerLogout,
    signUp: userReducerSignUp,
    userProfile: userReducerProfile
})

let initialState = {
    logIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    mode: {
        mode: "light"
    }
};

const store = configureStore({ reducer }, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;