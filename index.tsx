import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { countryReducer } from './reducers/countryReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './components/App';

const store = createStore(
  countryReducer, {
    allCountries: [],
    countries: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
