import React, { Component } from 'react';
import './card_image.css';

class CardImage extends Component {
  render() {
    return (
      <div className="card-image-wrapper">
        <div style={{ backgroundImage: `url(${this.props.src})` }} className="card-image" />
      </div>
    );
  }
}

export default CardImage;
