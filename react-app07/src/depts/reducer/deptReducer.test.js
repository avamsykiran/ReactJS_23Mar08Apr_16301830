import { WAIT } from './actionTypes';
import deptReducer from './deptReducer';

describe("Dept Reducer",()=>{

    beforeEach(()=>{
        console.log("Before Each");
    });

    afterEach(()=>{
        console.log("Before Each");
    });

    it("should not be null or undifiend",()=>{
        expect(deptReducer).toBeTruthy();
    });

    it("should match initial state",()=>{
        let result = deptReducer(undefined,{type:"nothing"});
        expect(result).toStrictEqual({
            deptsList: null,
            errMsg: null,
            wait: false
        });
    });

    it("should make wait to true when WAIT action is received",()=>{
        let result = deptReducer(undefined,{type:WAIT});
        expect(result).toStrictEqual({
            deptsList: null,
            errMsg: null,
            wait: true
        });
    });

});