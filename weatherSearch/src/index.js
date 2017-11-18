import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';

import ReduxPromise from 'redux-promise';

const createStoreMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store = {createStoreMiddleWare(reducers)}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
