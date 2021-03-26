import React, { Component } from 'react';
import ActivityRow from './ActivityRow';
import activityService from '../../service/ActivityService';

class Activites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: activityService.getAll()
        };
    }

    delete = (id) => {
        if (window.confirm(`Are your sure of deleting activity#${id}`)) {
            activityService.delete(id);
            this.setState({ ...this.state, activities: activityService.getAll() });
        }
    }

    render() {
        return (
            <section className="container-fluid p-4">

                <h3>Activities </h3>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th rowspan="2">Activity#</th>
                            <th rowspan="2">Name</th>
                            <th colspan="2">Assigned</th>
                            <th rowspan="2">Status</th>
                            <th rowspan="2"></th>
                        </tr>
                        <tr>
                            <th>To</th>
                            <th>By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.activities.map(
                            a => <ActivityRow content={a} delete={this.delete} />)
                        }
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Activites;