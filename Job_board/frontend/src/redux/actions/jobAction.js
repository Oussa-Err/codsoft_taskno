import axios from 'axios';
import { toast } from 'react-toastify'
import {
    JOBS_FAIL,
    JOBS_SUCCESS,
    JOB_FAIL,
    JOB_SUCCESS,
    CREATE_JOB_FAIL,
    CREATE_JOB_SUCCESS,
    DELETE_JOB_FAIL,
    DELETE_JOB_SUCCESS
} from "../constants"


export const jobsAction = (pageNumber, keyword = '') => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://127.0.0.1:8080/api/v1/jobs/`)
        dispatch({
            type: JOBS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOBS_FAIL,
            payload: error.response.data.message
        });
    }
}

export const jobAction = (id) => async (dispatch) => {
    console.log(id)
    try {
        const { data } = await axios.get(`http://127.0.0.1:8080/api/v1/job/${id}`);
        dispatch({
            type: JOB_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_FAIL,
            payload: error.response.data.message
        });
    }
}


export const deleteJobAction = (job_id) => async (dispatch) => {
    try {
        const { data } = await axios.delete(`http://127.0.0.1:8080/api/v1/delete/${job_id}`);
        dispatch({
            type: DELETE_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job deleted successfully");
    } catch (error) {
        dispatch({
            type: DELETE_JOB_FAIL,
            payload: error.response.data.message
        });
        toast.error(error.response.data.message);
    }
}

export const createJobAction = (job) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://127.0.0.1:8080/api/v1/create", job)
        dispatch({
            type: CREATE_JOB_SUCCESS,
            payload: data
        })
        toast.success("Job created successfully");

    } catch (error) {
        console.log(error.response.data)
        dispatch({
            type: CREATE_JOB_FAIL,
            payload: error.response.data.message
        })
        toast.error(error.response.data.message);
    }
}