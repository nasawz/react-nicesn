import React from 'react';
import ReactDOM from 'react-dom';

import Button from "../src/Button.js";

ReactDOM.render(
  <div>
    <Button componentClass="a">Default</Button>
    <Button componentClass="a" active>Default</Button>
    <Button componentClass="a" disabled>disabled</Button><br />
    <Button componentClass="a" block>block</Button>
    <Button componentClass="a" bsStyle="filled">filled</Button>
    <Button componentClass="a" bsStyle="filled" active>filled</Button>
    <Button componentClass="a" bsStyle="filled" disabled>filled</Button><br />
    <Button componentClass="a" bsStyle="rounded">rounded</Button>
    <Button componentClass="a" bsStyle="rounded" active>rounded</Button>
    <Button componentClass="a" bsStyle="rounded" disabled>rounded</Button>
    <Button componentClass="a" bsStyle="icon">
      <i className="ti-arrow-up"></i>
    </Button>
  </div>,
  document.getElementById('__react-content')
);
