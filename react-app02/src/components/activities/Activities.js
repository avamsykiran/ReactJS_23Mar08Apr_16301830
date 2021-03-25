import React, { Component } from 'react';
import ActivityRow from './ActivityRow';

class Activites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [
                { id: 1, name: 'Create System Design', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'Submitted' },
                { id: 2, name: 'Create Rest API', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'Under Review' },
                { id: 3, name: 'Create React UI', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'Reviewed' },
                { id: 4, name: 'Create Build Plan', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'In Progress' },
                { id: 5, name: 'Create Deploy Plan', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'In Progress' }
            ]
        };
    }

    delete = (id) => {

        /*  let ats = [...this.state.activities];
          let index = ats.findIndex(a => a.id==id);
          if(index>-1){
              ats.splice(index,1);
              this.setState({...this.state,activities:ats});
          } */

        if (window.confirm(`Are your sure of deleting activity#${id}`)) {
            let ats = this.state.activities.filter(a => a.id != id);
            this.setState({ ...this.state, activities: ats });
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