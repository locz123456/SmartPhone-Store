/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import {store} from './App/store'

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <Provider store={store}>
         <App />
      </Provider>
     
    </RecoilRoot>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
