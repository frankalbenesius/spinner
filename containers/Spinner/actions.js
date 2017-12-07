import { sum } from 'lodash'

// shows a spinning animation
export const start = state => {
  return {
    ...state,
    phase: 'starting',
    spinnable: false,
  }
}

// should determine spin result and slowly land on it
export const spin = state => {
  const spin = Math.floor(Math.random() * sum(state.sizes))
  const sectorStarts = state.sizes.map((x, i, sizes) => sum(sizes.slice(0, i)))
  const winner = sectorStarts.filter(start => start <= spin).length - 1
  return {
    ...state,
    phase: 'spinning',
    spin,
    winner,
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
  // our largest size must be reduced by a number that is
  // easily divisible by the remaining sectors
  const rawDelta = state.sizes[state.winner] * state.reduction
  const delta = rawDelta - rawDelta % (state.sizes.length - 1)

  // create new sizes with updated sizes
  const sizes = state.sizes.map((size, index) => {
    if (index === state.winner) {
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
export const end = state => {
  return {
    ...state,
    phase: 'waiting',
    spinnable: true,
  }
}
