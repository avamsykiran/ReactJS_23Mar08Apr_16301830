import axios from 'axios';

class ActivityService{

    constructor(){
        this.api="http://localhost:9999/activities";
    }

    getAllActivities(){
        return axios.get(this.api); //a promsie object is given
    }

    getActivityById(id){
        return axios.get(`${this.api}/${id}`); //a promsie object is given
    }

    addActivity(activity){
        return axios.post(this.api,activity);
    }

    updateActivity(activity){
        return axios.put(`${this.api}/${activity.id}`,activity); //a promsie object is given
    }

    deleteActivityById(id){
        return axios.delete(`${this.api}/${id}`); //a promsie object is given
    }
}

export default ActivityService;