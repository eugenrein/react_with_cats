import React, { Component } from 'react';
import CatListItem from './CatListItem';

class CatList extends Component {
  renderListItems() {
    return this.props.items.map((item, index) => (
      <CatListItem item={item} key={index} />
    ));
  }

  render() {
    return (
      <div className="cat-list">
        { this.renderListItems() }
      </div>
    );
  }
}

export default CatList;
