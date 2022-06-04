import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { AppProvider } from "./context/AppProvider";

// Bootstrap dependecies
import  'jquery';
import  'popper.js';
import  'bootstrap/dist/js/bootstrap.bundle.min';
import  'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <AppProvider>
    <App/>
  </AppProvider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
