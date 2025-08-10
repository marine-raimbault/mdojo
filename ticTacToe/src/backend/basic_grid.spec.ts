import { it, expect } from 'vitest'

import { hello } from './basic_grid'

it('says hi', () => {
  expect(hello()).toEqual('hi')
})
