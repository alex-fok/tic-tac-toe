import {useState} from 'react';
import Block from '../Block';
import relativeBlocks from '../../variables/relatives';

const Board = ({currentPlayer, winGame, continueGame}) => {
  const [progress, updateProgress] = useState([
    'X','O','X',
    'X','O','X',
    'X','O','X'
  ]);
  const checkStat = (rObj) => {
    // Check if winning condition is met
    const checkCondition = (conditionMet, bArray) => 
      conditionMet || 
      // Check if the origin block equals its relative blocks
      bArray.reduce((acc, b) =>
        acc && b === rObj.origin
      );
    const playerWon = rObj.relatives.reduce(checkCondition, false);

    // Proceed to next step base on game status
    playerWon ? winGame() : continueGame();
  }

  const makeMove = (blockId) => {
    // Make copy of current board, then replace target block with player's piece
    const newBoard = [...progress];
    newBoard[blockId] = currentPlayer.piece;
    updateProgress(newBoard);
    checkStat(relativeBlocks[blockId]);
  }
  
  return (
    <>
      { progress.map((piece, i) =>
          <Block
            key = {i}
            className = {`block block-${i}`}
            makeMove = {() => {makeMove(i)}}
            piece = {piece}
          />
        )
      }
    </>
  );
}
export default Board;