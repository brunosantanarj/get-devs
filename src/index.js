import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import App from './App';
import reducer from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
                 window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk, multi)(createStore)(reducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
