
function ActivityRow(props){
    let a = props.content;
    return (
        <tr>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.assignedTo}</td>
            <td>{a.assignedBy}</td>
            <td>{a.status}</td>
            <td>
                <button className="btn btn-sm btn-danger" 
                    onClick={(event)=>{props.delete(a.id);}}>
                    DELETE
                </button>
            </td>
        </tr>
    );
}

export default ActivityRow;