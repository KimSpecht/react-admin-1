import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';
import Root from './root';
import './index.less';

const store = createStore(
  reducer,
  applyMiddleware(promiseMiddleware, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);

export default store;
