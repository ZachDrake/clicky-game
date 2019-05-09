import React from 'react';
import Nav from './components/nav/Nav';
import Jumbotron from './components/jumpbotron/Jumbotron';
import Board from './components/board/Board';
import cardinfo from './cards.json';

function App() {
  return (
    <div>
        <Nav />
        <Jumbotron />
        <Board />
    </div>
  );
}

export default App;
