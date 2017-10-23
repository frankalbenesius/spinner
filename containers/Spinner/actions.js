import { sum } from 'lodash'

// shows a spinning animation
export const spin = state => {
  return {
    ...state,
    phase: 'spinning',
    spinnable: false,
  }
}

// should determine spin result and slowly land on it
export const land = state => {
  const spin = Math.floor(Math.random() * sum(state.sizes))
  return {
    ...state,
    phase: 'landing',
    spin,
  }
}

// should determine winning sector and animate it
export const celebrate = state => {
  return {
    ...state,
    phase: 'celebrating',
  }
}

// should grow & shrink the sectors to their new sizes
export const resize = state => {
  const starts = state.sizes.map((x, i, sizes) => sum(sizes.slice(0, i)))
  const winningIndex = starts.filter(start => start <= state.spin).length - 1

  // our largest size must be reduced by a number that is
  // easily divisible by the remaining sectors
  const rawDelta = state.sizes[winningIndex] * state.reduction
  const delta = rawDelta - rawDelta % (state.sizes.length - 1)

  // create new sizes with updated sizes
  const sizes = state.sizes.map((size, index) => {
    if (index === winningIndex) {
      return size - delta
    } else {
      return size + delta / 3
    }
  })

  return {
    ...state,
    phase: 'resizing',
    sizes,
  }
}

// reset the spinner, make it spinnable again
export const reset = state => {
  return {
    ...state,
    phase: 'waiting',
    spinnable: true,
  }
}
