import { sum } from 'lodash'

export const spin = state => {
  const spin = Math.floor(Math.random() * sum(state.sizes))
  const starts = state.sizes.map((x, i, sizes) => sum(sizes.slice(0, i)))
  const winner = starts.filter(start => start <= spin).length - 1

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
    phase: 'spinning',
    spinnable: false,
    sizes,
    spin,
    winner,
  }
}

export const land = state => {
  return {
    ...state,
    phase: 'landing',
  }
}

export const celebrate = state => {
  return {
    ...state,
    phase: 'celebrating',
  }
}

export const resize = state => {
  return {
    ...state,
    phase: 'resizing',
  }
}

export const reset = state => {
  return {
    ...state,
    phase: 'waiting',
    spinnable: true,
  }
}
