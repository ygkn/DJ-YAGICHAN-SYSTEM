import routes from './routes'
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(routes);
}
