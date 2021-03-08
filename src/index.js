import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "./store/reducer/user";
import store from "./store/reducer/user";

// Dark mode import
import Darkmode from 'darkmode-js';

// Dark Mode options
const options = {
  bottom: '32px', // default: '32px'
  right: '32px', // default: '32px'
  // left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

const rootReducer = combineReducers({
  use: user,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[middleware] dispatching", action);
      const result = next(action);
      console.log("[middleware]", store.getState());
      return result;
    };
  };
};

// const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
// registerServiceWorker();
