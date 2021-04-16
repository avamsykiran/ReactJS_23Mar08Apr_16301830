import axios from "axios";
import { ERR, LOAD, AFTER_UPDATE, WAIT } from "./actionTypes";

const apiUrl = " http://localhost:8888/depts";


const handleErr = (err,dispatch,errMsg) => {
    console.log(err);
    dispatch({type:ERR,payload:errMsg});
}

export const loadData =() => (dispatch) => {
    dispatch({type:WAIT});

    axios.get(apiUrl)
        .then(({data}) => dispatch({type:LOAD,payload:data}))
        .catch(err => handleErr(err,dispatch,"Data could not be loaded!"));
};

export const update =(dept) => (dispatch) => {
    dispatch({type:WAIT});

    axios.put(`${apiUrl}/${dept.id}`,dept)
        .then(({data}) => dispatch({type:AFTER_UPDATE,payload:data}))
        .catch(err => handleErr(err,dispatch,"Data could not be saved!"));
};

