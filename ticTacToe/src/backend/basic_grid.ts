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

function isWon(board: number[][]): boolean
function isWon(board: number[][], playerNb: 1 | 2): boolean
function isWon(board: number[][], playerNb?: 1 | 2): boolean {
  if (playerNb === undefined) return isWon(board, 1) || isWon(board, 2)

  return checkRows(board, playerNb) || checkDiagonals(board, playerNb) || checkCols(board, playerNb)
}

const checkRows = (board: number[][], playerNb: 1 | 2) => {
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (board[i].every((n) => n == playerNb)) return true
  }
  return 0
}

const checkCols = (board: number[][], playerNb: 1 | 2) => {
  let sum = 0
  for (let j = 0; j < BOARD_SIZE; j++) {
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (board[i][j] == playerNb) sum++
    }
    if (sum === BOARD_SIZE) return true
  }
  return false
}

const checkDiagonals = (board: number[][], playerNb: 1 | 2) => {
  let sumFirstDiag = 0
  let sumSecDiag = 0
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (board[i][i] == playerNb) sumFirstDiag++
    if (board[i][BOARD_SIZE - i - 1] == playerNb) sumSecDiag++
  }
  return sumFirstDiag == BOARD_SIZE || sumSecDiag == BOARD_SIZE
}

export { play, isWon }
