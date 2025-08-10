import { it, expect } from 'vitest'

import { isWon, play } from './basic_grid'

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

it('knows when someone won', () => {
  expect(isWon(startGrid)).toEqual(false)

  expect(
    isWon([
      [1, 0, 1],
      [0, 0, 0],
      [0, 0, 0],
    ]),
  ).toEqual(false)

  expect(
    isWon([
      [1, 0, 1],
      [0, 0, 0],
      [0, 0, 1],
    ]),
  ).toEqual(false)

  expect(
    isWon([
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ]),
  ).toEqual(true)

  expect(
    isWon([
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ]),
  ).toEqual(true)

  expect(
    isWon([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]),
  ).toEqual(true)

  //   expect(
  //   isWon([
  //     [1, 0, 0],
  //     [1, 0, 0],
  //     [1, 0, 0],
  //   ]),
  // ).toEqual(true)
})
