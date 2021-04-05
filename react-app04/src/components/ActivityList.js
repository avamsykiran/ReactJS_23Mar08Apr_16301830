
import { useEffect, useState } from 'react';
import ActivityService from '../service/ActivityService';
import ActivityRow from './ActivityRow';

const activityService = new ActivityService();

const ActivityList = (props) => {

    let [activities, setActibities] = useState(null);
    let [errMsg, setErrMsg] = useState(null);

    const loadData = () => {
        activityService.getAllActivities().then(
            (response) => {
                setActibities(response.data);
            },
            (err) => {
                console.log(err);
                setErrMsg("Sorry, Could not contact server.");
            }
        );
    };

    useEffect(loadData, []);

    const remove = (id) => {
        activityService.deleteActivityById(id).then(
            (response) => {
               loadData();
            },
            (err) => {
                console.log(err);
                setErrMsg("Sorry, Could not contact server.");
            }
        );
    }

    return (
        <section className="container-fluid p-4">
            <h3>Activiies</h3>

            {(!errMsg && !activities) &&
                <div className="alert alert-info p-2">
                    <strong>Please wait while loading data.</strong>
                </div>
            }

            {errMsg &&
                <div className="alert alert-danger p-2">
                    <strong>{errMsg}</strong>
                </div>
            }

            {activities &&
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ActitvityId</th>
                            <th>Activity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map(
                            a => <ActivityRow key={a.id} activity={a} delete={remove} />
                        )}
                    </tbody>
                </table>
            }
        </section>
    );
};

export default ActivityList;