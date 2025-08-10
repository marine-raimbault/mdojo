const grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
const play = (x: number, y: number) => {
  grid[x][y] = 1
  return grid
}

export { play }
