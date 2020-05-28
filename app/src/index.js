import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './pages/About';
import { Router } from "@reach/router";
import * as serviceWorker from './serviceWorker';

import "./scss/index.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/" />
      <About path="about" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
