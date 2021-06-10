import {useState} from 'react';
import Block from '../Block';
import relativeBlocks from '../../variables/relatives';
import './index.css'

const Board = ({currentPlayer, winGame, continueGame}) => {
  const [progress, updateProgress] = useState([
    '','','',
    '','','',
    '','',''
  ]);
  const checkStat = (rObj, piece) => {
    // Check if winning condition is met
    const checkCondition = (conditionMet, bArray) =>
      conditionMet || 
      // Check if the clicked block has the same mark as its relative blocks
      bArray.reduce((acc, b) =>
        acc && progress[b] === piece
      , true);
    const playerWon = rObj.relatives.reduce(checkCondition, false);

    // Proceed to next step base on game status
    playerWon ? winGame() : continueGame();
  }

  const makeMove = (blockId) => {
    if (progress[blockId] !== '') return;

    // Make copy of current board, then replace target block with player's piece
    const newBoard = [...progress];
    newBoard[blockId] = currentPlayer.piece;
    updateProgress(newBoard);
    checkStat(relativeBlocks[blockId], currentPlayer.piece);
  }
  
  return (
    <div className='board'>
      { progress.map((piece, i) =>
          <Block
            key = {i}
            className = {`block block-${i}`}
            makeMove = {() => {makeMove(i)}}
            piece = {piece}
          />
        )
      }
    </div>
  );
}
export default Board;