import { Component } from "react";
import ActivityService from '../service/ActivityService';
import ActivityRow  from './ActivityRow';

const activityService = new ActivityService();

class ActivityList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: null,
            errMsg: null
        };
    }

    componentDidMount = () => {
        activityService.getAllActivities().then(
            (response) => {
                this.setState({ ...this.state, activities: response.data });
            },
            (err) => {
                console.log(err);
                this.setState({ ...this.state, errMsg: "Sorry, Could not contact server." });
            }
        );
    }

    render() {
        return (
            <section className="container-fluid p-4">
                <h3>Activiies</h3>

                {(!this.state.errMsg && !this.state.activities) &&
                    <div className="alert alert-info p-2">
                        <strong>Please wait while loading data.</strong>
                    </div>
                }

                {this.state.errMsg &&
                    <div className="alert alert-danger p-2">
                        <strong>{this.state.errMsg}</strong>
                    </div>
                }

                {this.state.activities &&
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ActitvityId</th>
                                <th>Activity</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.activities.map(
                                a => <ActivityRow activity={a} />
                            )}
                        </tbody>
                    </table>
                }
            </section>
        );
    }
}

export default ActivityList;