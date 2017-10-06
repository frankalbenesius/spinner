import React from 'react'
import { sum } from 'lodash'

import { roll } from './actions'

import Circle from '../../components/Circle'
import Sector from '../../components/Sector'
import Arrow from '../../components/Arrow'

class Spinner extends React.Component {
  state = {
    sizes: [250, 250, 250, 250],
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
        {this.state.sizes.map((size, i, sizes) => (
          <Sector
            key={i}
            index={i}
            size={size}
            start={sum(sizes.slice(0, i))}
          />
        ))}
        <Arrow roll={this.state.roll} />
      </Circle>
    )
  }
}

export default Spinner
