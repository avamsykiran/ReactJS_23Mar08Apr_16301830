import initialState from "./initialState";
import { GET_ALL_ACTIVITES, MARK_ACTIVITY_EDITABLE, UNMARK_ACTIVITY_EDITABLE, WAIT, ERROR } from "./actionTypes";

const ActivityReducer = (state = initialState(), action) => {

    let resultantState = null;
    let activityId = null;

    switch (action.type) {
        case GET_ALL_ACTIVITES:
            resultantState = {
                ...state,
                activities: action.payload,
                errMsg: null,
                isLoading: false
            };
            break;
        case WAIT:
            resultantState = {
                ...state,
                errMsg: null,
                isLoading: true
            };
            break;
        case ERROR:
            resultantState = {
                ...state,
                errMsg: action.payload,
                isLoading: false
            };
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
        default:
            console.log("Unexpected action type received" + action.type);
            resultantState = state;
            break;
    }

    return resultantState;

};

export default ActivityReducer;