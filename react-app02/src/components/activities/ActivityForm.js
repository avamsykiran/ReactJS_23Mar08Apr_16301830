import React, { Component } from 'react';
import activityService from '../../service/ActivityService';

class ActivityForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: { id: 0, name: '', assignedTo: '', assignedBy: '', status: '' },
            msg: null,
            validActivityId: true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        activityService.add(this.state.activity);
        let a = { id: 0, name: '', assignedTo: '', assignedBy: '', status: '' };
        this.setState({ ...this.state, activity: a, msg: 'Activity got saved!' });
    }

    changeActivityId = (event) => {
        if (event.target.value) {
            let aid = parseInt(event.target.value);
            let a = { ...this.state.activity, id: aid };
            this.setState({
                ...this.state,
                activity: a,
                validActivityId: activityService.isValidActivityId(aid)
            });
        }
    }

    changeActivityName = (event) => {
        let a = { ...this.state.activity, name: event.target.value };
        this.setState({ ...this.state, activity: a });
    }

    changeAssignedBy = (event) => {
        let a = { ...this.state.activity, assignedBy: event.target.value };
        this.setState({ ...this.state, activity: a });
    }

    changeAssignedTo = (event) => {
        let a = { ...this.state.activity, assignedTo: event.target.value };
        this.setState({ ...this.state, activity: a });
    }

    changeStatus = (event) => {
        let a = { ...this.state.activity, status: event.target.value };
        this.setState({ ...this.state, activity: a });
    }

    render() {
        let a = this.state.activity;
        return (
            <section className="container-fluid p-4">
                <div className="col-sm-4 mx-auto p-2">
                    <h3>Activity</h3>

                    {this.state.msg &&
                        <div className="alert alert-info p-2">
                            {this.state.msg}
                        </div>
                    }

                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="form-control-label">Activity#</label>
                            <input type="number" className="form-control" required value={a.id} onChange={this.changeActivityId} />
                            {(!this.state.validActivityId) &&
                                <div class="alert alert-danger">
                                    Invalid or duplicate activity id. 
                                </div>
                            }
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Name</label>
                            <input type="text" className="form-control" required value={a.name} onChange={this.changeActivityName} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">AssignedBy</label>
                            <input type="text" className="form-control" required value={a.assignedBy} onChange={this.changeAssignedBy} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">AssignedTo</label>
                            <input type="text" className="form-control" required value={a.assignedTo} onChange={this.changeAssignedTo} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Status</label>
                            <input type="text" className="form-control" required value={a.status} onChange={this.changeStatus} />
                        </div>
                        <button className="btn btn-primary btn-block">
                            ADD ACTIVITY
                        </button>
                    </form>

                </div>


            </section>
        );
    }
}

export default ActivityForm;