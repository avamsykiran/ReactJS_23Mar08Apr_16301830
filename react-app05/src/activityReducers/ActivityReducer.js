import initialState from "./initialState";
import { GET_ALL_ACTIVITES, MARK_ACTIVITY_EDITABLE, UNMARK_ACTIVITY_EDITABLE, ADD_ACTIVITY, DELETE_ACTIVITY, UPDATE_ACTIVITY } from "./actionTypes";

const ActivityReducer = (state = initialState(), action) => {

    let resultantState = null;
    let activity = null;
    let activityId = null;

    switch (action.type) {
        case GET_ALL_ACTIVITES:
            resultantState = state;
            break;
        case MARK_ACTIVITY_EDITABLE:
            activityId = action.payload;
            if (activityId) {
                resultantState = {
                    ...state, activities: state.activities.map(
                        a => a.id !== activityId ? a : { ...a, editable: true }
                    )
                };
            } else {
                resultantState = state;
            }
            break;
        case UNMARK_ACTIVITY_EDITABLE:
            activityId = action.payload;
            if (activityId) {
                resultantState = {
                    ...state, activities: state.activities.map(
                        a => a.id !== activityId ? a : { ...a, editable: null }
                    )
                };
            } else {
                resultantState = state;
            }
            break;
        case ADD_ACTIVITY:
            activity = action.payload;
            if (activity) {
                resultantState = { ...state, activities: state.activities.concat(activity) };
            } else {
                resultantState = state;
            }
            break;
        case DELETE_ACTIVITY:
            activityId = action.payload;
            if (activityId) {
                resultantState = { ...state, activities: state.activities.filter(a => a.id !== activityId) };
            } else {
                resultantState = state;
            }
            break;
        case UPDATE_ACTIVITY:
            activity = action.payload;
            if (activity) {
                resultantState = {
                    ...state, activities: state.activities.map(
                        a => a.id !== activity.id ? a : { ...activity, editable: null }
                    )
                };
            } else {
                resultantState = state;
            }
            break;
        default:
            console.log("Unexpected action type received" + action.type);
            resultantState = state;
            break;
    }

    return resultantState;

};

export default ActivityReducer;