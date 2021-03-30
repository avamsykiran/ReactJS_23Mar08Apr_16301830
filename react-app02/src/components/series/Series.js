import React,{Component} from 'react';

class Series extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            result:null,
            errMsg:null
        };
    } 
    
    componentDidMount(){
        this.props.promiseObject.then(
            (data) => {
                this.setState({...this.state,result:data,errMsg:null});
            },
            (err) => {
                this.setState({...this.state,result:null,errMsg:err});
            }
        );    
    }

    render(){
        return (
            <div className="card mb-2">
                <div className="card-body p-2">
                    {this.state.errMsg && <strong>Error: {this.state.errMsg}</strong>}
                    {this.state.result && <strong>Series: {JSON.stringify(this.state.result)}</strong>}
                    {!this.state.errMsg && !this.state.result && <strong>Please wait while loading...</strong>}
                </div>
            </div>
        );
    }
};

export default Series;