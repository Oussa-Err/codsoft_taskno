import {
    DELETE_JOB_FAIL,
    DELETE_JOB_RESET,
    DELETE_JOB_SUCCESS,
    JOBS_FAIL,
    JOBS_RESET,
    JOBS_SUCCESS,
    JOBS_REQUEST,
    JOB_FAIL,
    JOB_RESET,
    JOB_SUCCESS,
    CREATE_JOB_FAIL,
    CREATE_JOB_RESET,
    CREATE_JOB_SUCCESS,

} from "../constants"

export const getJobsReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOBS_REQUEST: return {
            loading: true,
        }
        case JOBS_SUCCESS:
            return {
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                jobs: action.payload.jobs,
                loading: false
            }
        case JOBS_FAIL:
            return {
                error: action.payload,
                loading: false
            }
        case JOBS_RESET:
            return {}
        default:
            return state;
    }
}

export const getJobReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_SUCCESS:
            return {
                success: action.payload.success,
                job: action.payload.job,
            }
        case JOB_FAIL:
            return { error: action.payload }
        case JOB_RESET:
            return {}
        default:
            return state;
    }
}

export const createJobReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_JOB_SUCCESS:
            return {
                job: action.payload,
            }
        case CREATE_JOB_FAIL:
            return { error: action.payload }
        case CREATE_JOB_RESET:
            return {}
        default:
            return state;
    }
}

export const deleteJobReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_JOB_SUCCESS:
            return {
                success: action.payload.success,
                message: action.payload.message
            }
        case DELETE_JOB_FAIL:
            return {

                error: action.payload
            }
        case DELETE_JOB_RESET:
            return {}
        default:
            return state;
    }
}