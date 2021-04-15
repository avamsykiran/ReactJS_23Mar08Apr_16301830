
const initalState = () => ({
    empsList:null,
    errMsg:null,
    wait:false
});

const empReducer = (state = initalState(),action) => {
    let finalState = null;

    switch(action.type){
        default:
            finalState = state;
    }

    return finalState;
};

export default empReducer;