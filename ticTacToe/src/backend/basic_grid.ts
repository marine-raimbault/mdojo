const BOARD_SIZE = 3

const grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

let isPlayerOne = true

const play = (x: number, y: number) => {
  grid[x][y] = isPlayerOne ? 1 : 2
  isPlayerOne = !isPlayerOne
  return grid
}

const isWon = (board: number[][]) => {
  return checkRows(board) || checkDiagonals(board)
}

const checkRows = (board: number[][]) => {
  let sum = 0
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      sum += board[i][j]
    }
    if (sum === BOARD_SIZE) return true
    else sum = 0
  }
  return sum == BOARD_SIZE
}

const checkDiagonals = (board: number[][]) => {
  let sum = 0
  for (let i = 0; i < BOARD_SIZE; i++) {
    sum += board[i][i]
  }
  return sum == BOARD_SIZE
}
export { play, isWon }
