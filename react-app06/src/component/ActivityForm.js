import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ADD_ACTIVITY, UNMARK_ACTIVITY_EDITABLE, UPDATE_ACTIVITY } from '../activityReducers/actionTypes';

const ActivityForm = (props) => {

    let [id, setId] = useState(0);
    let [title, setTitle] = useState('');
    let [status, setStatus] = useState('');
    let [isEditing, setEditing] = useState(false);

    useEffect(() => {
        let a = props.activity;

        if (a) {
            setId(a.id);
            setTitle(a.title);
            setStatus(a.status);
            setEditing(true);
        }
    }, []);

    const resetActivity = () => {
        setId(0);
        setTitle('');
        setStatus('');
    };

    return (
        <tr>
            <td><input type="number" name="aid" value={id}
                readOnly={isEditing} onChange={(e) => { setId(parseInt(e.target.value)) }} /> </td>
            <td><input type="text" name="att" value={title} onChange={(e) => { setTitle(e.target.value) }} /> </td>
            <td><input type="text" name="ats" value={status} onChange={(e) => { setStatus(e.target.value) }} /> </td>
            <td>
                {isEditing ?
                    <React.Fragment>
                        <button type="button" className="btn btn-sm btn-primary mr-2"
                            onClick={(e) => { props.save({ id, title, status }); }}>
                            <i className="fa fa-save"> Save</i>
                        </button>
                        <button type="button" className="btn btn-sm btn-danger"
                            onClick={(e) => { props.cancel(id); }}>
                            <i className="fa fa-close"> Cancel</i>
                        </button>
                    </React.Fragment>
                    :
                    <button type="button" className="btn btn-sm btn-info"
                        onClick={(e) => { props.add({ id, title, status }); resetActivity(); }}>
                        <i className="fa fa-plus"> Add</i>
                    </button>
                }
            </td>
        </tr>
    );
};

const mapDispatchToProps = (dispatch) => ({
    add: (activity) => { dispatch({ type: ADD_ACTIVITY, payload: activity }) },
    save: (activity) => { dispatch({ type: UPDATE_ACTIVITY, payload: activity }) },
    cancel: (id) => { dispatch({ type: UNMARK_ACTIVITY_EDITABLE, payload: id }) }
});

const connectorToStore = connect(null, mapDispatchToProps) //HOC

export default connectorToStore(ActivityForm);