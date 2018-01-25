import React, { Component } from 'react';
import './style.css';

class ButtonBar extends Component {
  render() {
    return (
      <div className="button-bar">
        { this.props.children }
      </div>
    );
  }
}

export default ButtonBar;
