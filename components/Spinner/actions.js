import { sum } from 'lodash'

const getRangeStart = (state, sector) => {
  return sum(state.sectors.slice(0, sector))
}

export const roll = state => {
  const roll = Math.floor(Math.random() * 1000) // 0 - 999
  const winner = state.sectors.filter(sector => sector.start <= roll).length - 1

  return {
    ...state,
    sectors: [
      ...state.sectors.slice(0, winner),
      {
        ...state.sectors[winner],
        // size: ?
        // start: ?
        wins: state.sectors[winner].wins + 1,
      },
      ...state.sectors.slice(winner + 1),
    ],
    roll,
    winner,
  }
}
