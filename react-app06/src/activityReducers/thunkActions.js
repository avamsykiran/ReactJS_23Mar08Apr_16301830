import axios from 'axios';
import {WAIT,ERROR,GET_ALL_ACTIVITES} from './actionTypes'

const apiUrl = "http://localhost:9999/activities";

export const loadData = () => (dispatch) => {
    
    dispatch({type:WAIT});

    axios.get(apiUrl)
        .then( resp => dispatch({type:GET_ALL_ACTIVITES,payload:resp.data}))
        .catch( err  => {
            console.log(err);
            dispatch({type:ERROR,payload:'Sorry! Could not receive data!'});
        });
};

export const addActivity = (activity) => (dispatch) => {
    
    dispatch({type:WAIT});

    axios.post(apiUrl,activity)
        .then(resp => loadData()(dispatch) )
        .catch( err  => {
            console.log(err);
            dispatch({type:ERROR,payload:'Sorry! could not save data!'});
        });
};

export const updateActivity = (activity) => (dispatch) => {
    
    dispatch({type:WAIT});

    axios.put(`${apiUrl}/${activity.id}`,activity)
        .then(resp => loadData()(dispatch) )
        .catch( err  => {
            console.log(err);
            dispatch({type:ERROR,payload:'Sorry! Could not save data!'});
        });
};

export const deleteActivity = (id) => (dispatch) => {
    
    dispatch({type:WAIT});

    axios.delete(`${apiUrl}/${id}`)
        .then(resp => loadData()(dispatch) )
        .catch( err  => {
            console.log(err);
            dispatch({type:ERROR,payload:'Sorry! Could not save data!'});
        });
};