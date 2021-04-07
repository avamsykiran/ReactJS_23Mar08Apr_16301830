
import { connect } from 'react-redux';
import { DELETE_ACTIVITY } from '../activityReducers/actionTypes'

const ActivityRow = (props) => (
    <tr>
        <td>{props.activity.id}</td>
        <td>{props.activity.title}</td>
        <td>{props.activity.status}</td>
        <td>
            <button className="btn btn-primary btn-sm mr-2">
                <i className="fa fa-pencil"> Edit</i>
            </button>
            <button className="btn btn-danger btn-sm" onClick={(e) => {props.delete(props.activity.id);}}>
                <i className="fa fa-trash"> Delete</i>
            </button>
        </td>
    </tr>
);

const mapDispatchToProps = (dispatch) => ({
    delete: (id) =>{dispatch({type:DELETE_ACTIVITY,payload:id})}
});

const connectorToStore = connect(null,mapDispatchToProps) //HOC

export default connectorToStore(ActivityRow);