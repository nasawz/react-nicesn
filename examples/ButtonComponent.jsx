import React from 'react';
import ReactDOM from 'react-dom';

import Button from "../src/Button.js";


ReactDOM.render(
  <div>
    <Button href="javascript:;">Default</Button>
    <Button href="javascript:;" block>block</Button>
    <Button href="javascript:;" active>active</Button>
    <Button href="javascript:;" disabled>disabled</Button>
    <Button bsStyle="filled" href="javascript:;">filled</Button>
    <Button bsStyle="rounded" href="javascript:;">rounded</Button>
    <Button bsStyle="icon" href="javascript:;">
      <i className="ti-arrow-up"></i>
    </Button>
  </div>,
  document.getElementById('__react-content')
);
