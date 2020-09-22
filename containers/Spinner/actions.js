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
export const spin = cheatSector => state => {
  const sectorStarts = state.sizes.map((x, i, sizes) => sum(sizes.slice(0, i)))

  let spin = Math.random()

  if (cheatSector) {
    const cheatSectorStart = sectorStarts[cheatSector - 1]
    const nextSectorStart =
      cheatSector >= sectorStarts.length ? 1 : sectorStarts[cheatSector]
    const cheatSectorSize = nextSectorStart - cheatSectorStart
    spin = cheatSectorStart + cheatSectorSize * Math.random()
  }

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

    const winningMass = sectorSizes[winningIndex]
    const losingMass = sum(sectorSizes) - winningMass
    const movingMass = winningMass * reductionFactor

    const newSizes = sectorSizes.map((size, idx) => {
      const isWinner = idx === winningIndex
      if (isWinner) {
        return size - movingMass
      } else {
        const distributionRatio = size / losingMass
        return size + movingMass * distributionRatio
      }
    })
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
