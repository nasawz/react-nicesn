import './style/navigation.less'

import React, { PropTypes } from 'react'

import Logo from "./Logo.js";
import Module from "./Module.js";
import ModuleGroup from "./ModuleGroup.js";
import Nav from "./Nav.js";
import NavBar from "./NavBar.js";
import NavContainer from "./NavContainer.js";

const Navigation = React.createClass({
  render() {
    return (
      <NavContainer>
        <Nav>
          <NavBar>
            <Module direction="left">
              <Logo/>
            </Module>
            <ModuleGroup direction="right">
              <Module direction="left">
              </Module>
              <Module direction="left" widget>
              </Module>
              <Module direction="left" widget>
              </Module>
            </ModuleGroup>
          </NavBar>
        </Nav>
      </NavContainer>
      )
  }
})

export default Navigation
