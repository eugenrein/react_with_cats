import React, { Component }  from 'react';
import './cross_button.css';

class CrossButton extends Component {
  render() {
    return (
      <a className="cross-button" onClick={this.props.onClick}>
        <i className="fa fa-times" />
      </a>
    );
  }
}

export default CrossButton;
