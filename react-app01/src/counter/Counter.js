import React from 'react';
import './Counter.css';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:1,
            count2:1
        };
    }

    increment1 = (event) =>{
        let c = this.state.count1 +1;
        this.setState({...this.state,count1:c});
    }  
    
    decrement1 = (event) =>{
        let c = this.state.count1 -1;
        this.setState({...this.state,count1:c});
    }
    
    increment2 = (event) =>{
        let c = this.state.count2 +1;
        this.setState({...this.state,count2:c});
    }  
    
    decrement2 = (event) =>{
        let c = this.state.count2 -1;
        this.setState({...this.state,count2:c});
    }

    render(){
        return (
            <section>
                <p><strong>{this.state.count1}</strong></p>
                <button type="button" onClick={this.increment1}>Add Up On First</button>
                <button type="button" onClick={this.decrement1}>Bring Down On First</button>

                <p><strong>{this.state.count2}</strong></p>
                <button type="button" onClick={this.increment2}>Add Up On Second</button>
                <button type="button" onClick={this.decrement2}>Bring Down On Second</button>
            </section>
        );
    }
}

export default Counter;