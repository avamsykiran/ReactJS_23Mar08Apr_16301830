import { Component } from "react";
import ActivityService from "../service/ActivityService";
import { Redirect } from 'react-router-dom';

const activityService = new ActivityService();

class ActivityForm extends Component {
    constructor(props){
        super(props);
        this.state={
            activity:{id:0,title:'',status:''},
            errMsg:null,
            isAdding:true,
            isSaved:false
        };
    }

    componentDidMount(){
        if(this.props.match.params.id){
            activityService.getActivityById(this.props.match.params.id).then(
                (response) =>{
                    this.setState({...this.state,isAdding:false,activity:response.data});
                },
                (err) => {
                    console.log(err);
                    this.setState({...this.state,errMsg:'Sorry! Could not fetech data'});
                }
            );
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let p=null;
        if(this.state.isAdding){
            p = activityService.addActivity(this.state.activity);
        }else{
            p = activityService.updateActivity(this.state.activity);
        }

        p.then(
            (response) => {
                this.setState({...this.state,isSaved:true});
            },
            (err) => {
                console.log(err);
                this.setState({...this.state,errMsg:'Sorry! Could not save data'});
            }
        );
    }

    render(){

        if(this.state.isSaved){
            return <Redirect to="/" />;
        }

        let a = this.state.activity;
        return (
            <section className="container-fluid p-4">
                <div className="col-sm-4 p-2 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Activity Id</label>
                            <input type="number" name="tb1" value={a.id} className="form-control"
                            onChange={(e) => {
                                this.setState({...this.state,activity:{...a,id:parseInt(e.target.value)}});
                            }} readOnly={!this.state.isAdding}/>
                        </div>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" name="tbs" value={a.title} className="form-control"
                            onChange={(e) => {
                                this.setState({...this.state,activity:{...a,title:e.target.value}});
                            }} />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <input type="text" name="tbs" value={a.status} className="form-control"
                            onChange={(e) => {
                                this.setState({...this.state,activity:{...a,status:e.target.value}});
                            }} />
                        </div>
                        <button className="btn btn-block btn-primary">
                            <i className="fa fa-save"> Save Activity</i>
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}

export default ActivityForm;