import { sum } from 'lodash'

import { getSectorStart } from './helpers'

export const roll = state => {
  const roll = Math.floor(Math.random() * 1000) // 0 - 999

  const starts = state.sizes.map((sector, i, sizes) => {
    return getSectorStart(sizes, i)
  })
  const winner = starts.filter(start => start <= roll).length - 1

  const winningSize = state.sizes[winner]
  const rawChangeInSize = winningSize * state.reduction
  const spreadCount = state.sizes.length - 1
  const changeInSize = rawChangeInSize - rawChangeInSize % spreadCount

  // create new sizes with updated sizes
  const sizes = state.sizes.map((size, index) => {
    if (index === winner) {
      return size - changeInSize
    } else {
      return size + changeInSize / 3
    }
  })

  return {
    ...state,
    sizes,
    roll,
    winner,
  }
}
