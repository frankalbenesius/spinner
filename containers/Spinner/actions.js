import { sum } from 'lodash'

export const roll = state => {
  const roll = Math.floor(Math.random() * sum(state.sizes))
  const starts = state.sizes.map((x, i, sizes) => sum(sizes.slice(0, i)))
  const winner = starts.filter(start => start <= roll).length - 1

  // our largest size must be reduced by a number that is
  // easily divisible by the remaining sectors
  const rawDelta = state.sizes[winner] * state.reduction
  const delta = rawDelta - rawDelta % (state.sizes.length - 1)

  // create new sizes with updated sizes
  const sizes = state.sizes.map((size, index) => {
    if (index === winner) {
      return size - delta
    } else {
      return size + delta / 3
    }
  })

  return {
    ...state,
    sizes,
    roll,
    winner,
  }
}
