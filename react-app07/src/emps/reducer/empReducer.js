import { AFTER_UPDATE, ERR, LOAD, WAIT } from "./actionTypes";

const initalState = () => ({
    empsList:null,
    errMsg:null,
    wait:false
});

const empReducer = (state = initalState(),action) => {
    let finalState = null;

    switch (action.type) {
        case WAIT:
            finalState = {
                ...state,
                wait: true,
                errMsg: null
            };
            break;
        case ERR:
            finalState = {
                ...state,
                wait: false,
                errMsg: action.payload
            };
            break;
        case LOAD:
            finalState = {
                ...state,
                empsList: action.payload,
                wait: false,
                errMsg: null
            };
            break;
        case AFTER_UPDATE:
            let empToUpdate = action.payload;
            finalState = {
                ...state,
                empsList: state.empsList.map(e => e.id != empToUpdate.id ? e : { ...empToUpdate }),
                wait: false,
                errMsg: null
            };
            break;
        default:
            finalState = state;
    }


    return finalState;
};

export default empReducer;