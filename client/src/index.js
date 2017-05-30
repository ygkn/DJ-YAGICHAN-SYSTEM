import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import { reducer as router } from 'redux-tower';
import { Router } from 'redux-tower/lib/react';

import reducers from './reducers';
import rootSaga from './sagas';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

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

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <div>
      <Router />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
