import React from 'react';
import ReactDOM from 'react-dom';

import Col from "../src/Col.js";

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


ReactDOM.render(
  <Col>Col</Col>,
  document.getElementById('__react-content')
);
