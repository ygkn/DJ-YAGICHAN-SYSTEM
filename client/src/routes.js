import React from 'react';

import Login from './components/Login'
import Post from './components/Post'
import Dashboard from './components/Dashboard'

import { createBrowserHistory as createHistory, saga as router } from 'redux-tower';
import { fork } from 'redux-saga/effects'

const history = createHistory();

const routes = {
  "/": "/login",
  "/login": <Login />,
  "/:roomId/post": <Post />,
  "/:roomId/dashboard": <Dashboard />
};

export default function* routesSaga() {
  yield fork(router, {history, routes});
}
