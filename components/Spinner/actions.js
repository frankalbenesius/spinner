import { sum } from 'lodash'

const getRangeStart = (state, sector) => {
  return sum(state.sectors.slice(0, sector))
}

export const roll = state => {
  const roll = Math.floor(Math.random() * 1000) // 0 - 999
  const winningIndex =
    state.sectors.filter(sector => sector.start <= roll).length - 1
  const winningSector = state.sectors[winningIndex]
  const rawChangeInSize = winningSector.size * state.reduction
  const spreadCount = state.sectors.length - 1
  const changeInSize = rawChangeInSize - rawChangeInSize % spreadCount

  const sectors = state.sectors.map((sector, index) => {
    if (index === winningIndex) {
      return {
        ...sector,
        size: sector.size - changeInSize,
      }
    } else {
      return {
        ...sector,
        size: sector.size + changeInSize / 3,
      }
    }
  })

  return {
    ...state,
    sectors,
    roll,
    winner: winningIndex,
  }
}
