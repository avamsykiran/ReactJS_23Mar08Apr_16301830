
const ActivityRow = (props) => {
    return (
        <tr>
            <td>{props.activity.id}</td>
            <td>{props.activity.title}</td>
            <td>{props.activity.status}</td>
        </tr>
    );
};

export default ActivityRow;