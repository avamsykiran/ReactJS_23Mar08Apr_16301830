import React from 'react';
import Activites from './components/activities/Activities';
import Footer from './components/footer/footer';
import Header from './components/header/Header';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      appTitle:"Activity Manager"
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header title={this.state.appTitle}/>
        <Activites />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;