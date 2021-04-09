import { connect } from "react-redux";
import ActivityForm from "./ActivityForm";
import ActivityRow from './ActivityRow';
import { loadData } from '../activityReducers/thunkActions';
import { useEffect } from "react";

const ActivityList = (props) => {
    useEffect(() => { props.load() }, []);

    return (
        <section className="container-fluid p-4">
            <h3>Activities List </h3>

            {props.isLoading &&
                <div className="alert alert-info">
                    <strong>Please wait while loading data.</strong>
                </div>
            }

            {props.errMsg &&
                <div className="alert alert-danger">
                    <strong>{errMsg}</strong>
                </div>
            }

            {props.activities &&
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
                            a.editable ?
                                <ActivityForm key={a.id} activity={a} /> :
                                <ActivityRow key={a.id} activity={a} />
                        ))}
                    </tbody>
                </table>
            }
        </section>
    )
};

const mapStateToProps = (state) => ({
    activities: state.activities,
    isLoading: state.isLoading,
    errMsg: state.errMsg
});

const mapDispatchToProps = (dispatch) => ({
    load: () => { dispatch(loadData()) }
});

const connectorToStore = connect(mapStateToProps, mapDispatchToProps); //HOC

export default connectorToStore(ActivityList);