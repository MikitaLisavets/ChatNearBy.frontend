import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Routes from './routes';

import logger from './dev/logger';
import '../styles/style.pcss';

const isProduction = process.env.NODE_ENV === 'production';

let middleware = null;

if (isProduction) {
  middleware = applyMiddleware(thunk);
} else {
  middleware = applyMiddleware(thunk, logger);
}


const store = createStore(
  rootReducer,
  middleware
);

ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
