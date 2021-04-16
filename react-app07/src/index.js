import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import empReducer from './emps/reducer/empReducer';
import deptReducer from './depts/reducer/deptReducer';
import HRMApp from './HRMApp';

const rootReducer = combineReducers({
  depts:deptReducer,
  emps:empReducer
});

const hrmStore = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={hrmStore}>
      <HRMApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
