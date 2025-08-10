import { it, expect } from 'vitest'

import { isWon, play } from './basic_grid'
import { describe } from 'node:test'

const emptyGrid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

it('play two turn', () => {
  let board = emptyGrid

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

describe('knows winning rules', () => {
  it('win in a row', () => {
    expect(
      isWon([
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
      ]),
    ).toEqual(true)
  })

  it('win in a col', () => {
    expect(
      isWon([
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
      ]),
    ).toEqual(true)
  })

  it('win in a diag', () => {
    expect(
      isWon([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toEqual(true)

    expect(
      isWon([
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
      ]),
    ).toEqual(true)
  })

  it('not a win', () => {
    expect(isWon(emptyGrid)).toEqual(false)

    expect(
      isWon([
        [1, 0, 2],
        [0, 0, 0],
        [0, 0, 1],
      ]),
    ).toEqual(false)
  })
})
