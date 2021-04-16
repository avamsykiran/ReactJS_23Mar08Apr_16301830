import { useState } from "react";
import { connect } from "react-redux";
import { CANCEL, EDIT } from "../reducer/actionTypes";
import { update } from "../reducer/thunkActions";

const DeptForm = ({ dept,cancel,update }) => {

    let [title,setTitle] = useState(dept.title);

    return (
        <div className="card card-primary">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-sm-2 bg-dark text-light">
                        {dept.id}
                    </div>
                    <div className="col">
                        <input type="text" value={title} onChange={e=> setTitle(e.target.value)}/>
                    </div>
                    <div className="col-sm-4">
                        <button className="btn btn-sm mr-1" 
                        onClick={e => update({id:dept.id,title:title})}> OK </button>
                        <button className="btn btn-sm " onClick={e=>cancel(dept.id)}> CANCEL </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    update: (dept) => dispatch(update(dept)),
    cancel: (id) => dispatch({type:CANCEL,payload:id})
});

export default connect(mapStateToProps, mapDispatchToProps)(DeptForm);