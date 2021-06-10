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

  const checkStat = (blockNestedArray) => {
    // Check if winning condition is met
    const checkCondition = (conditionMet, bArray) => conditionMet || 
      bArray.reduce((mark, block) => mark === block);
    const playerWon = blockNestedArray.reduce(checkCondition, false);

    // Proceed to next step base on game status
    playerWon ? winGame() : continueGame();
  }
  return (
    <div className='App'>
      <div>
        {
          winnerExists
          ? <p>{players[current % 2].name} wins!</p>
          : draw
            ? <p>DRAW!</p>
            : <Board
              currentPlayer = {players[current  % 2]}
              checkStat = {checkStat}
            />
        }
      </div>
    </div>
  );
}

export default App;
