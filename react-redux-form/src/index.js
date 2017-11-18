import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Route} from 'react-router-dom';

import reducers from './reducers';

import PostIndex from './components/post_index';


const createStoreMiddleWare = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store = {createStoreMiddleWare(reducers)}>
    <BrowserRouter>
      <div>
        <Route path ="/" component ={PostIndex}/>
        <Route path ="/goodbye" component ={Goodbye}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.container')
);
