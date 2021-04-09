import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import ActivityReducer from './activityReducers/ActivityReducer'
import { Provider } from 'react-redux';
import { ThunkMiddleware } from 'redux-thunk';

let activityStore = createStore(ActivityReducer,applyMiddleware(ThunkMiddleware));

ReactDOM.render(
    <Provider store={activityStore}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
