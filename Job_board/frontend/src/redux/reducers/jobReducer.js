import {
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAIL,
    JOBS_REQUEST,
    JOBS_SUCCESS,
    JOBS_FAIL,
    JOB_REQUEST,
    JOB_SUCCESS,
    JOB_FAIL,
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL,

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
        default:
            return state;
    }
}

export const getJobReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_REQUEST: return {
            loading: true
        }
        case JOB_SUCCESS:
            return {
                success: action.payload.success,
                job: action.payload.job,
                loading: false
            }
        case JOB_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}

export const createJobReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_JOB_REQUEST: return {
            loading: true
        }
        case CREATE_JOB_SUCCESS:
            return {
                job: action.payload,
                loading: false
            }
        case CREATE_JOB_FAIL:
            return {
                error: action.payload, loading: false
            }
        default:
            return state;
    }
}

export const deleteJobReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_JOB_REQUEST: return {
            loading: true
        }
        case DELETE_JOB_SUCCESS:
            return {
                success: action.payload.success,
                message: action.payload.message,
                loading: false
            }
        case DELETE_JOB_FAIL:
            return {
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}