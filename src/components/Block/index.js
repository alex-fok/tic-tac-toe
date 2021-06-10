import './index.css';

const Block = ({className, makeMove, piece}) => {
  return (
    <span
      onClick={makeMove}
      className={className}
    >
      {piece}
    </span>
  )
}

export default Block;