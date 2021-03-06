import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './Reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
     <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

