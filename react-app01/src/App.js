import React from 'react';
import Counter from './counter/Counter';
import Footer from './footer-component/Footer';
import Header from './header-component/Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:"First React Appliction",
      tagLine:"...an SPA types..."
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header title={this.state.title} tagLine={this.state.tagLine}/>
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;