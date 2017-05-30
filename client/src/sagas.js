import { createBrowserHistory as createHistory, saga as router } from 'redux-tower';
import routes from './routes'
import { fork } from 'redux-saga/effects'

const history = createHistory();

export default function* rootSaga() {
  yield fork(router, {history, routes});

}
