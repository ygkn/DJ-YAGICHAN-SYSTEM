import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from '../redux-tower/lib/react';

import configureStore from './store';

const store = configureStore();

render(
  <AppContainer>
    <Provider store={store}>
      <div>
        <Router />
        <DevTools />
      </div>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./sagas', () => {
    render(
      <AppContainer>
        <Provider store={store}>
          <div>
            <Router />
            <DevTools />
          </div>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}