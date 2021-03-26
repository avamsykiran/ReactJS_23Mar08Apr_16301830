import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Activites from './components/activities/Activities';
import ActivityForm from './components/activities/ActivityForm';
import Footer from './components/footer/footer';
import Header from './components/header/Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appTitle: "Activity Manager"
    }
  }
  render() {
    return (
      <Router>
        <Header title={this.state.appTitle} />
        <Switch>
          <Route path='/new' component={ActivityForm} />
          <Route path='/' exact component={Activites} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;