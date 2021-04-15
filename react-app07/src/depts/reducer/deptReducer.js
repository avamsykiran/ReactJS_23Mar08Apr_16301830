
const initalState = () => ({
    deptsList:null,
    errMsg:null,
    wait:false
});

const deptReducer = (state = initalState(),action) => {
    let finalState = null;

    switch(action.type){
        default:
            finalState = state;
    }

    return finalState;
};

export default deptReducer;