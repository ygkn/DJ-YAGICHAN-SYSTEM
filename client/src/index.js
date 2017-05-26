import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import { Router, Route} from 'react-router'
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers';
import rootSaga from './sagas';

import Login from './components/Login.jsx'
import Post from './components/Post'
import Dashboard from './components/Dashboard'

const sagaMiddleware = createSagaMiddleware();

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)


const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument()
  )
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <div>
          <Route exact path="/" component={Login}/>
          <Route exact path="/:roomId" component={Post}/>
          <Route exact path="/:roomId/dashboard" component={Dashboard}/>
        </div>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
