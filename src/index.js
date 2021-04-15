import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import user from './store/reducer/user';
import store from './store/reducer/user';

// const rootReducer = combineReducers({
//   use: user,
// });

// const logger = store => {
//   return next => {
//     return action => {
//       console.log('[middleware] dispatching', action);
//       const result = next(action);
//       console.log('[middleware]', store.getState());
//       return result;
//     };
//   };
// };

// const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// serviceWorker.unregister();
// registerServiceWorker();
