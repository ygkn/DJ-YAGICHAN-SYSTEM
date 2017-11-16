import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

import { reducer as router } from '../redux-tower';

export const configureStore = () => {
  const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor theme="monokai" preserveScrollTop={false} />
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
  return store;
};
