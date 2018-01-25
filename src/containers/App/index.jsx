import React, { Component } from 'react';
import TopBar from '../../components/TopBar';
import { Card, CardImage, CardContent } from '../../components/Card';
import './style.css';
import ButtonBar from '../../components/ButtonBar';
import CrossButton from '../../components/ButtonBar/CrossButton';
import HeartButton from '../../components/ButtonBar/HeartButton';
import StartOverlay from '../../components/StartOverlay';
import CatList from '../../components/CatList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStartOverlay: true,
      showCatList: false,
      cat: null,
      likes: [],
      dislikes: []
    };

    this.likes = [];
    this.dislikes = [];

    this.handleStartOverlayClick = this.handleStartOverlayClick.bind(this);
    this.handleCrossButtonClick = this.handleCrossButtonClick.bind(this);
    this.handleHeartButtonClick = this.handleHeartButtonClick.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  componentDidMount() {
    this.loadCatData();
  }

  handleStartOverlayClick() {
    this.setState({ showStartOverlay: false });
  }

  handleCrossButtonClick(cat) {
    const dislikes = this.state.dislikes;
    dislikes.push(cat);
    this.setState({ dislikes: dislikes });

    this.loadCatData();
  }

  handleHeartButtonClick(cat) {
    const likes = this.state.likes;
    likes.push(cat);
    this.setState({ likes: likes });

    this.loadCatData();
  }

  handleBurgerClick() {
    console.log('handleBurgerClick');
    this.setState({ showCatList: !this.state.showCatList });
  }

  loadCatData() {
    fetch('http://localhost:3000/cat')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ cat: response });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.showStartOverlay) {
      return (
        <div className="app">
          <StartOverlay onClick={this.handleStartOverlayClick} />
        </div>
      );
    }

    if (this.state.showCatList) {
      return (
        <div className="app">
          <TopBar onBurgerClick={this.handleBurgerClick} />
          <CatList items={this.state.likes} />
          <CatList items={this.state.dislikes} />
        </div>
      );
    }

    const { cat } = this.state;

    return (
      <div className="app">
        <TopBar onBurgerClick={this.handleBurgerClick} />
        <Card>
          <CardImage src={cat.image} />
          <CardContent>
            <div className="cat-details">
              <div className="cat-details-top">
                <div className="left ellipsis">
                  <strong>{ cat.title }</strong>
                </div>
                <div className="right ellipsis">
                  { cat.location }
                </div>
              </div>
              <div className="cat-description">
                { cat.description }
              </div>
            </div>
          </CardContent>
        </Card>
        <ButtonBar>
          <CrossButton onClick={() => this.handleCrossButtonClick(cat) } />
          <HeartButton onClick={() => this.handleHeartButtonClick(cat) } />
        </ButtonBar>
      </div>
    );
  }
}

export default App;
