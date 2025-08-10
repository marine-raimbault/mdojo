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
  return checkRows(board) || checkDiagonals(board) || checkCols(board)
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
  let sumFirstDiag = 0
  let sumSecDiag = 0
  for (let i = 0; i < BOARD_SIZE; i++) {
    sumFirstDiag += board[i][i]
    sumSecDiag += board[i][BOARD_SIZE - i - 1]
  }
  return sumFirstDiag == BOARD_SIZE || sumSecDiag == BOARD_SIZE
}

const checkCols = (board: number[][]) => {
  let sum = 0
  for (let j = 0; j < BOARD_SIZE; j++) {
    for (let i = 0; i < BOARD_SIZE; i++) {
      sum += board[i][j]
    }
    if (sum === BOARD_SIZE) return true
    else sum = 0
  }
  return sum == BOARD_SIZE
}

export { play, isWon }
