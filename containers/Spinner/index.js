import React from 'react'
import { sum } from 'lodash'

import { roll } from './actions'

import SVGWrapper from '../../components/SVGWrapper'
import Sector from '../../components/Sector'
import Arrow from '../../components/Arrow'
import Button from '../../components/Button'
import StateDisplay from '../../components/StateDisplay'

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
    return [
      <SVGWrapper>
        {this.state.sizes.map((size, i, sizes) => (
          <Sector
            key={i}
            index={i}
            size={size}
            start={sum(sizes.slice(0, i))}
          />
        ))}
        <Arrow roll={this.state.roll} total={sum(this.state.sizes)} />
        <Button onClick={this.handleRoll}>spin</Button>
      </SVGWrapper>,
      <StateDisplay state={this.state} />,
    ]
  }
}

export default Spinner
