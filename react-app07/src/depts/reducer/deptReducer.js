import { AFTER_UPDATE, CANCEL, EDIT, ERR, LOAD, WAIT } from "./actionTypes";

const initalState = () => ({
    deptsList: null,
    errMsg: null,
    wait: false
});

const deptReducer = (state = initalState(), action) => {
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
                deptsList: action.payload,
                wait: false,
                errMsg: null
            };
            break;
        case EDIT:
            let idToEdit = action.payload;
            finalState = {
                ...state,
                deptsList: state.deptsList.map(d => d.id != idToEdit ? d : { ...d, editing: true })
            };
            break;
        case CANCEL:
            let idToCancel = action.payload;
            finalState = {
                ...state,
                deptsList: state.deptsList.map(d => d.id != idToCancel ? d : { ...d, editing: null })
            };
            break;
        case AFTER_UPDATE:
            let deptToUpdate = action.payload;
            finalState = {
                ...state,
                deptsList: state.deptsList.map(d => d.id != deptToUpdate.id ? d : { ...deptToUpdate }),
                wait: false,
                errMsg: null
            };
            break;
        default:
            finalState = state;
    }

    return finalState;
};

export default deptReducer;