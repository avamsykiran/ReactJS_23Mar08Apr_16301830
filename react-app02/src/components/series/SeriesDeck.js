import React,{Component} from 'react';
import NumberSeriesService from '../../service/NumberSeriesService';
import Series from './Series';

class SeriesDeck extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            lb:0,
            ub:0,
            promises:[]
        };
    }  

    addPromise = (event) => {
        event.preventDefault();
        let ns = new NumberSeriesService();
        let prms = this.state.promises.concat(ns.generateSeries(this.state.lb,this.state.ub));
        this.setState({...this.state,promises:prms});
    }

    render(){
        return (
          <section className="container-fluid p-4">
            <form className="form-inline mb-4" onSubmit={this.addPromise}>
                <label>Lower Bound: </label>
                <input type="number" value={this.state.lb} 
                onChange={(event) => {this.setState({...this.state,lb:parseInt(event.target.value)})}} />
                <label>Upper Bound: </label>
                <input type="number" value={this.state.ub} 
                onChange={(event) => {this.setState({...this.state,ub:parseInt(event.target.value)})}} />
                <button className="btn btn-sm btn-primary">
                    Execute Series
                </button>
            </form>

            {this.state.promises.map(
                (p,index) => <Series promiseObject={p} key={index} />
            )}
          </section>
        );
    }
};

export default SeriesDeck;