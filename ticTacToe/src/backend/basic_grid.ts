const BOARD_SIZE: number = 3

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
  return (
    checkRows(board) == 1 ||
    checkRows(board) == 2 ||
    checkDiagonals(board) ||
    checkCols(board) == 1 ||
    checkCols(board) == 2
  )
}

// return 0 if no winner, 1 or 2 whether player one or player 2 won
const checkRows = (board: number[][]) => {
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (board[i].every((n) => n == 1)) return 1
    if (board[i].every((n) => n == 2)) return 2
  }
  return 0
}

const checkCols = (board: number[][]) => {
  let sumOfOnes = 0
  let sumOfTwos = 0
  for (let j = 0; j < BOARD_SIZE; j++) {
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (board[i][j] == 1) sumOfOnes++
      else if (board[i][j] == 2) sumOfTwos++
    }
    if (sumOfOnes === BOARD_SIZE) return 1
    if (sumOfTwos === BOARD_SIZE) return 2

    sumOfOnes = 0
    sumOfTwos = 0
  }
  return 0
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

export { play, isWon }
