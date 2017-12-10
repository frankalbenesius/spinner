import React from 'react'
import { sum } from 'lodash'

import { start, spin, celebrate, resize, end } from './actions'
import { spinMs } from '../../components/constants'

import SVGWrapper from '../../components/SVGWrapper'
import Sector from '../../components/Sector'
import Arrow from '../../components/Arrow'
import SpinButton from '../../components/SpinButton'

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

class Spinner extends React.Component {
  state = {
    sizes: [250, 250, 250, 250],
    reduction: 0.75,
    spin: 0,
    spinnable: true, //adj.	Capable of being spun.
    winner: 0,
    phase: 'waiting',
  }
  handleSpin = async () => {
    this.setState(start)
    await wait(100)
    this.setState(spin)
    await wait(spinMs)
    this.setState(celebrate)
    await wait(1500)
    this.setState(resize)
    await wait(500)
    this.setState(end)
  }
  render() {
    return (
      <SVGWrapper>
        {this.state.sizes.map((size, i, sizes) => (
          <Sector
            key={i}
            index={i}
            size={size}
            startAt={sum(sizes.slice(0, i))}
          />
        ))}
        <Arrow spin={this.state.spin} total={sum(this.state.sizes)} />
        <SpinButton
          disabled={!this.state.spinnable}
          onClick={this.handleSpin}
          winner={this.state.winner}
          phase={this.state.phase}
        />
      </SVGWrapper>
    )
  }
}

export default Spinner
