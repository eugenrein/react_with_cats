import React, { Component } from 'react';
import './card_content.css';

class CardContent extends Component {
  render() {
    return (
      <div className="card-content">
        { this.props.children }
      </div>
    );
  }
}

export default CardContent;
