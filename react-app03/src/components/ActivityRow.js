import { Link } from "react-router-dom";

const ActivityRow = (props) => {
    return (
        <tr>
            <td>{props.activity.id}</td>
            <td>{props.activity.title}</td>
            <td>{props.activity.status}</td>
            <td>
                <Link className="btn btn-sm btn-info mr-2" to={`edit/${props.activity.id}`}>
                    <i className="fa fa-pencil"></i> Edit
                </Link>
                <button className="btn btn-sm btn-danger" 
                    onClick={(event)=>{props.delete(props.activity.id);}} >
                    <i className="fa fa-trash"></i> Delete
                </button>
            </td>
        </tr>
    );
};

export default ActivityRow;