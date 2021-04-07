import initialState from "./initialState";
import { GET_ALL_ACTIVITES, GET_ACTIVITY_BY_ID, ADD_ACTIVITY, DELETE_ACTIVITY, UPDATE_ACTIVITY } from "./actionTypes";

const ActivityReducer = (state = initialState(), action) => {

    let resultantState = null;
    let activity=null;
   
    switch (action.type) {
        case GET_ALL_ACTIVITES:
            resultantState = state;
            break;
        case GET_ACTIVITY_BY_ID:
            break;
        case ADD_ACTIVITY:
            activity = action.payload;
            resultantState = {...state};
            if(activity){
                resultantState.activities.push(activity);
            }
            break;
        case DELETE_ACTIVITY:          
            resultantState = {...state};
            let activityId = action.payload;
            if(activityId){             
                let index = state.activities.findIndex(a => a.id===activityId);
                resultantState.activities = state.activities.splice(index,1);
            }
            break;
        case UPDATE_ACTIVITY:
            resultantState = {...state};
            activity= action.payload;
            if(activity){
                let index = state.activities.findIndex(a => a.id===activity.id);
                resultantState.activities[index]=activity;
            }
            break;
        default:
            console.log("Unexpected action type received"+action.type);
            resultantState = state;
            break;
    }

    return resultantState;

};

export default ActivityReducer;