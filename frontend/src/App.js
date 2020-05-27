import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

// redux setup
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// reducers
import authReducer from './store/reducers/auth';
import searchReducer from './store/reducers/search';
const storeEnhancer =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
    : compose;

const store = createStore(
  combineReducers({ auth: authReducer, search: searchReducer }),
  storeEnhancer(applyMiddleware(thunk))
);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
