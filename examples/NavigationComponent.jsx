import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from "../src/Navigation.js";

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


ReactDOM.render(
  <Navigation>Navigation</Navigation>,
  document.getElementById('__react-content')
);
