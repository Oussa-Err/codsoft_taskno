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

const store = configureStore({ reducer }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;