import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { default as thunk } from 'redux-thunk'
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from './context/reducer'
import reducers from './reducers'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);