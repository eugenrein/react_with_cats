import React, { Component }  from 'react';
import './heart_button.css';

class HeartButton extends Component {
  render() {
    return (
      <a className="heart-button" onClick={this.props.onClick}>
        <i className="fa fa-heart" />
      </a>
    );
  }
}

export default HeartButton;
