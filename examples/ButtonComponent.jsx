import React from 'react';
import ReactDOM from 'react-dom';

import Button from "../src/Button.js";

ReactDOM.render(
  <div>
    <Button>Default</Button>
    <Button active>Default</Button>
    <Button disabled>disabled</Button><br />
    <Button block>block</Button>
    <Button bsStyle="filled">filled</Button>
    <Button bsStyle="filled" active>filled</Button>
    <Button bsStyle="filled" disabled>filled</Button><br />
    <Button bsStyle="rounded">rounded</Button>
    <Button bsStyle="rounded" active>rounded</Button>
    <Button bsStyle="rounded" disabled>rounded</Button>
    <Button bsStyle="icon">
      <i className="ti-arrow-up"></i>
    </Button>
  </div>,
  document.getElementById('__react-content')
);
