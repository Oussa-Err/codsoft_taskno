import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    userReducerProfile,
    userReducerLogIn,
    userReducerLogout,
    userReducerSignUp,
    userApplyJobReducer,
} from './reducers/userReducer';

import {
    getJobsReducer,
    getJobReducer,
    createJobReducer,
    deleteJobReducer
} from './reducers/jobReducer'

const reducer = combineReducers({
    logIn: userReducerLogIn,
    logOut: userReducerLogout,
    signUp: userReducerSignUp,
    userProfile: userReducerProfile,
    getJobs: getJobsReducer,
    getJob: getJobReducer,
    userJobApplication: userApplyJobReducer,
    createJob: createJobReducer,
    deleteJob: deleteJobReducer,
})

const store = configureStore({ reducer }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// reducer export for testing purposes
export { reducer }

export { store }