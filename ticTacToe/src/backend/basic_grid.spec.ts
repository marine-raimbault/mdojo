import { it, expect } from 'vitest'

import { play } from './basic_grid'

const startGrid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

it('play two turn', () => {
  let board = startGrid

  board = play(0, 0)
  expect(board).toEqual([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])

  board = play(1, 1)

  expect(board).toEqual([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 0],
  ])
})
