import React from 'react';
import ActivityList from './component/ActivityList';
import Header from './component/Header';

function App() {
  return (
    <React.Fragment>
        <Header title="ActivytTracker" />
        <ActivityList />
    </React.Fragment>
  );
}

export default App;
