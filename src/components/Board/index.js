import {useState} from 'react';
import Block from '../Block';
import relatives from '../../variables/relatives';
import './index.css';

const Board = ({currentPiece, proceedGame}) => {
  const [progress, updateProgress] = useState([
    '','','',
    '','','',
    '','',''
  ]);

  const makeMove = (blockId, piece) => {
    if (progress[blockId] !== '') return;

    // Make copy of current board, then replace target block with player's piece
    const newBoard = [...progress];
    newBoard[blockId] = piece;
    updateProgress(newBoard);
    proceedGame(progress, relatives[blockId], piece);
  }
  
  return (
    <div className='board'>
      { progress.map((piece, i) =>
          <Block
            key = {i}
            className = {`block block-${i}`}
            makeMove = {() => {makeMove(i, currentPiece)}}
            piece = {piece}
          />
        )
      }
    </div>
  );
}
export default Board;