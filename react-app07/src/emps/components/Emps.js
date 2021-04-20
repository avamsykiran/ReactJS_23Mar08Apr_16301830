import { useEffect } from "react";
import { connect } from "react-redux";
import { loadData } from "../reducer/thunkActions";
import { loadData as loadDeptData } from "../../depts/reducer/thunkActions";

const Emps = ({depts,emps,wait,err,load,loadDepts}) => {

    useEffect(()=>{
        load();
        loadDepts();
    },[]);

    return (
        <section>
            <h3>Employees List</h3>
            
            {wait &&
                <div className="alert alert-info">
                    <strong>Please wait while loading...!</strong>
                </div>
            }

            {err &&
                <div className="alert alert-danger">
                    <strong>{err}</strong>
                </div>
            }

            {emps &&
               <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Emp#</th>
                        <th>Name</th>
                        <th>HireDate</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(
                        e =>(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.hiredate}</td>
                                <td>{e.basic}</td>
                                <td>
                                    {e.deptId} - 
                                    {depts.find(d => d.id==e.deptId)?.title}                                    
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
               </table>
            }
        </section>
    );
};

const mapStateToProps = (state) => ({
    depts: state.depts.deptsList,
    emps: state.emps.empsList,
    wait: state.emps.wait,
    err: state.emps.errMsg
});

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(loadData()),
    loadDepts: () => dispatch(loadDeptData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Emps);