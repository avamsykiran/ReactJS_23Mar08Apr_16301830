import React, { Component } from 'react';
import activityService from '../../service/ActivityService';

class ActivityForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            activity:{ id: 0, name: '', assignedTo: '', assignedBy: '', status: '' }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        activityService.add(this.state.activity);
        window.alert("Activity saved!");
        this.setState({...this.state,activity:{ id: 0, name: '', assignedTo: '', assignedBy: '', status: '' }});
    }

    changeActivityId = (event) =>{
        let a = {...this.state.activity,id:parseInt(event.target.value)};
        this.setState({...this.state,activity:a});
    }

    changeActivityName = (event) =>{
        let a = {...this.state.activity,name:event.target.value};
        this.setState({...this.state,activity:a});
    }

    changeAssignedBy = (event) =>{
        let a = {...this.state.activity,assignedBy:event.target.value};
        this.setState({...this.state,activity:a});
    }
    
    changeAssignedTo = (event) =>{
        let a = {...this.state.activity,assignedTo:event.target.value};
        this.setState({...this.state,activity:a});
    }
    
    changeStatus = (event) =>{
        let a = {...this.state.activity,status:event.target.value};
        this.setState({...this.state,activity:a});
    }

    render() {
        let a = this.state.activity;
        return (
            <section className="container-fluid p-4">
                <div className="col-sm-4 mx-auto p-2">
                    <h3>Activity</h3>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="form-control-label">Activity#</label>
                            <input type="number" className="form-control" value={a.id} onChange={this.changeActivityId} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Name</label>
                            <input type="text" className="form-control" value={a.name} onChange={this.changeActivityName}/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">AssignedBy</label>
                            <input type="text" className="form-control" value={a.assignedBy} onChange={this.changeAssignedBy}/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">AssignedTo</label>
                            <input type="text" className="form-control" value={a.assignedTo} onChange={this.changeAssignedTo}/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Status</label>
                            <input type="text" className="form-control" value={a.status} onChange={this.changeStatus}/>
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