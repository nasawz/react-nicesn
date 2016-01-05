import React from 'react';
import ReactDOM from 'react-dom';

import Row from "../src/Row.js";

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


ReactDOM.render(
  <Row />,
  document.getElementById('__react-content')
);
