import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers';
import rootSaga from './sagas';

import Login from './components/Login.jsx'
import Post from './components/Post'
import Dashboard from './components/Dashboard'

const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  )
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/:roomId" component={Post}/>
        <Route exact path="/:roomId/dashboard" component={Dashboard}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
