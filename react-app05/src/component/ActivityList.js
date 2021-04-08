import { connect } from "react-redux";
import ActivityForm from "./ActivityForm";
import  ActivityRow  from './ActivityRow';

const ActivityList = (props) => (
    <section className="container-fluid p-4">
        <h3>Activities List </h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ActivityId</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <ActivityForm />
                {props.activities.map(a => (
                    a.editable?
                    <ActivityForm key={a.id} activity={a} /> :
                    <ActivityRow key={a.id} activity={a} />
                ))}
            </tbody>
        </table>
    </section>
);

const mapStateToProps = (state) => ({activities:state.activities});

const connectorToStore = connect(mapStateToProps); //HOC

export default connectorToStore(ActivityList);