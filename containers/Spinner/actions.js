import ReactGA from 'react-ga'
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
  ReactGA.event({
    category: 'Spinner',
    action: 'Spin',
    value: spin,
  })
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
  const adjustSectors = (sectorSizes, winningIndex) => {
    const reductionFactor = 0.7
    const lostingSectorCount = sectorSizes.length - 1

    const winningMass = sectorSizes[winningIndex]
    const losingMass = sum(sectorSizes) - winningMass
    const movingMass = winningMass * reductionFactor

    const newSizes = sectorSizes.map((size, idx) => {
      const isWinner = idx === winningIndex
      if (isWinner) {
        return Math.floor(size - movingMass)
      } else {
        const distributionRatio = size / losingMass
        return Math.floor(size + movingMass * distributionRatio)
      }
    })
    const missingMass = sum(sectorSizes) - sum(newSizes)
    newSizes[winningIndex] += missingMass
    return newSizes
  }

  return {
    ...state,
    phase: 'resizing',
    sizes: adjustSectors(state.sizes, state.winner),
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
