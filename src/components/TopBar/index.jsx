import React, { Component } from 'react';
import logo from './catinder.png';
import './style.css';

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <img src={logo} className="top-bar-image" />
        <span className="burger-menu-icon" onClick={this.props.onBurgerClick}>
          <i className="fa fa-bars" />
        </span>
      </div>
    );
  }
}

export default TopBar;
