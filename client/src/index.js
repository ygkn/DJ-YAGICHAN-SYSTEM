import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory as createHistory, reducer as router } from 'redux-tower';

import reducers from './reducers';
import rootSaga from './sagas';

import Login from './components/Login.jsx'
import Post from './components/Post'
import Dashboard from './components/Dashboard'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    ...reducers,
    router
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    DevTools.instrument()
  )
);

const routerHistory = syncHistoryWithStore(history, store, { adjustUrlOnReplay: true });

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <div>
      <Router history={routerHistory}>
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
