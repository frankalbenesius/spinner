import { sum } from 'lodash'

export const roll = state => {
  const roll = Math.floor(Math.random() * 1000) // 0 - 999
  const winningIndex =
    state.sectors.filter(sector => sector.start <= roll).length - 1
  const winningSector = state.sectors[winningIndex]
  const rawChangeInSize = winningSector.size * state.reduction
  const spreadCount = state.sectors.length - 1
  const changeInSize = rawChangeInSize - rawChangeInSize % spreadCount

  // create new sectors with updated sizes
  const sectors = state.sectors.map((sector, index, arr) => {
    if (index === winningIndex) {
      return {
        ...sector,
        size: sector.size - changeInSize,
        wins: sector.wins + 1,
      }
    } else {
      return {
        ...sector,
        size: sector.size + changeInSize / 3,
      }
    }
  })

  // update the start values of the new sectors based on new sizes
  sectors.forEach((sector, index) => {
    sector.start = sectors.slice(0, index).reduce((sum, s) => s.size + sum, 0)
  })

  return {
    ...state,
    sectors,
    roll,
    winner: winningIndex,
  }
}
