import React from 'react';

import Entrance from "./components/Entrace";
import Post from "./components/Post";
import User from "./components/User";
import Dashboard from "./components/Dashboard";

import { createBrowserHistory as createHistory, saga as router } from '../redux-tower';
import { fork } from 'redux-saga/effects'

const history = createHistory();

const routes = {
  "/": <Entrance />,
  "/room": "/",
  "/room/:roomId": <Post />,
  "/room/:roomId/dashboard": <Dashboard />,
  "/user/:userId": <User />
};

export default function* routesSaga() {
  yield fork(router, {history, routes});
}
