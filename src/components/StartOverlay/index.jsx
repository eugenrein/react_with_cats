import React, { Component } from 'react';
import logo from './catinder.png';
import './style.css';

class StartOverlay extends Component {
  render() {
    return (
      <div className="start-overlay" onClick={this.props.onClick}>
        <img src={logo} className="start-overlay-image" />
      </div>
    );
  }
}

export default StartOverlay
