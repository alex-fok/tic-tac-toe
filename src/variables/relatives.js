const relativeBlocks = {
  '0': {
    origin: 0,
    relatives: [[1,2],[3,6],[4,8]]
  },
  '1': {
    origin: 1,
    relatives: [[0,2],[4,7]]
  },
  '2': {
    origin: 2,
    relatives: [[0,1],[5,8],[4,6]]
  },
  '3': {
    origin: 3,
    relatives: [[4,5],[0,6]]
  },
  '4': {
    origin: 4,
    relatives: [[0,8],[1,7],[2,6],[3,5]]
  },
  '5': {
    origin: 5,
    relatives: [[2,8],[3,4]],
  },
  '6': {
    origin: 6,
    relatives: [[0,3],[2,4],[7,8]]
  },
  '7': {
    origin: 7,
    relatives: [[1,4],[6,8]]
  },
  '8': {
    origin: 8,
    relatives: [[0,4],[2,5],[6,7]]
  }
};

export default relativeBlocks;