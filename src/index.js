import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { App } from "./components/App";
// import rootReducer from "./reducers";
import {counter} from './reducers/counter'

// const store = createStore(rootReducer);
const store = createStore(counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
