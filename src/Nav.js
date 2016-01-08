import classNames from "classnames"
import elementType from 'react-prop-types/lib/elementType'
import React, { PropTypes } from 'react'

const Nav = React.createClass({
  propTypes: {
    /**
     * You can use a custom element for this component
     */
    componentClass: elementType
  },
  getDefaultProps: function() {
    return {
      componentClass: 'nav'
    };
  },
  render() {
    let ComponentClass = this.props.componentClass;
    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, '')}>
          {this.props.children}
      </ComponentClass>
      )
  }
})

// TODO 滚动到顶部

export default Nav
