import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Jumbotron from './components/jumpbotron/Jumbotron';
import Board from './components/board/Board';


class App extends Component {

  state = {
    score: 0,
    highScore: 0
  }

  restart = () => {
    this.setState({score: 0});
  }

  updateScore = (score) => {
    this.setState(score);
  }

  render() {
    return (
      <div>
        <Nav score={this.state.score} highScore={this.state.highScore}/>
        <Jumbotron />
        <Board restart={this.restart}
         updateScore={this.updateScore}
         cards={this.state.cards} 
         score={this.state.score} />

      </div>
    );
  }
};


export default App;
