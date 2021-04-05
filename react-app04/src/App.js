import ActivityList from './components/ActivityList';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ActivityForm from './components/ActivityForm';
import Header from './components/Header';

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/add" component={ActivityForm} />
        <Route path="/edit/:id" component={ActivityForm} />
        <Route path="/" exact component={ActivityList} />
      </Switch>
    </Router>
  );
}

export default App;
