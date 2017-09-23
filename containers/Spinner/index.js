import React from 'react'
import { padStart } from 'lodash'

import { roll } from './actions'
import Circle from '../../components/Circle'
import Sector from '../../components/Sector'
import Arrow from '../../components/Arrow'

class Spinner extends React.Component {
  state = {
    sectors: [
      {
        size: 250,
        start: 0,
        wins: 0,
      },
      {
        size: 250,
        start: 250,
        wins: 0,
      },
      {
        size: 250,
        start: 500,
        wins: 0,
      },
      {
        size: 250,
        start: 750,
        wins: 0,
      },
    ],
    reduction: 0.75,
    roll: 0,
    winner: undefined,
  }
  handleRoll = () => {
    this.setState(roll)
  }
  render() {
    return (
      <Circle onClick={this.handleRoll}>
        {this.state.sectors.map((sector, i) => (
          <Sector key={i} index={i} sector={sector} />
        ))}
        <Arrow roll={this.state.roll} />
      </Circle>
    )
  }
}

export default Spinner
