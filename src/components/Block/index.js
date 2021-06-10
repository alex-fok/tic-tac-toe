import './index.css';

const Block = ({className, makeMove, piece}) => {
  return (
    <div
      onClick={makeMove}
      className={className}
    >
      <div className='mark'>{piece}</div>
    </div>
  )
}

export default Block;