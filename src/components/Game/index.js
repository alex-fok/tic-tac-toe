import Board from '../Board';
const TOTAL_BLOCK_COUNT = 9;
const Game = ({drawGame, winGame, count, setCount, currentPiece}) => {

  const continueGame = () => {
    const occupied = count + 1;
    // If all blocks are filled, draw the game
    occupied >= TOTAL_BLOCK_COUNT ? drawGame() : setCount(occupied);
  };

  const proceedGame = (progress, rObj, piece) => {
    // Check if winning condition is met
    const checkCondition = (conditionMet, bArray) =>
      conditionMet || 
      // Check if the clicked block has the same mark as its relative blocks
      bArray.reduce((acc, b) =>
        acc && progress[b] === piece
      , true);
    const playerWon = rObj.relatives.reduce(checkCondition, false);

    // If winning condition is met, let current player win, else continue game
    playerWon ? winGame() : continueGame();
  }

  return (
    <Board
      currentPiece = {currentPiece}
      proceedGame = {proceedGame}
    />
  )
}
export default Game;