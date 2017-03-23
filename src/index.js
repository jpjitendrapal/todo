// import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, BrowserHistory} from 'react-router';
// import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './components/App';
// import './src/css/index.css';
const store = configureStore();

render(
    <Provider store={store}>
        <App/>
  </Provider>,
 document.getElementById('App'));