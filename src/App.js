import { useState } from 'react';

import './App.css';
import Board from './components/Board';

const TOTAL_BLOCK_COUNT = 9;

const players = [
 {
    name: 'Player 1',
    piece: 'O',
 },
 {
    name: 'Player 2',
    piece: 'X',
 }  
];

function App() {
  const [current, advanceCount] = useState(0);
  const [winnerExists, winGame] = useState(false);
  const [draw, drawGame] = useState(false);

  const continueGame = () => {
    const occupied = current + 1;
    occupied >= TOTAL_BLOCK_COUNT ? drawGame(true) : advanceCount(occupied);
  };

  return (
    <div className='App'>
      <div>
        {
          winnerExists
          ? <p>{players[current % 2].name} wins!</p>
          : draw
            ? <p>DRAW!</p>
            : <Board
              currentPlayer = {players[current % 2]}
              continueGame = {continueGame}
              winGame = {() => {winGame(true)}}
            />
        }
      </div>
    </div>
  );
}

export default App;
