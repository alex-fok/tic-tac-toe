import { useState } from 'react';

import './App.css';
import Game from './components/Game';

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

const App = () => {
  const [winner, setWinner] = useState('');
  const [draw, drawGame] = useState(false);
  const [count, setCount] = useState(0);
  const [gameKey, setGameKey] = useState(0);

  const resetGame = () => {
    setWinner('');
    drawGame(false);
    setCount(0);
    setGameKey(gameKey + 1 % 2);
  }

  return (
    <div className='App'>
      <p>{ winner !== ''
        ? `${winner} wins!`
        : draw
          ? 'DRAW!'
          : `${players[count % 2].name}'s turn`}
      </p>
      {/* Disable pointer events when game has ended */}
      <div
        style={{
          pointerEvents: winner !== '' || draw ? 'none' : 'auto'
        }}
      >
        <Game
          key={gameKey}
          drawGame = {() => drawGame(true)}
          winGame = {() => {
            if (winner === '')
              setWinner(players[count % 2].name)
          }}
          count = {count}
          setCount = {setCount}
          currentPiece = {players[count % 2].piece}
        />
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}
export default App;
