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
  let sum = 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) sum += board[i][j]
  }
  return sum > 0
}

export { play, isWon }
