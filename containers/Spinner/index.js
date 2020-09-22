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
    sizes: [0.25, 0.25, 0.25, 0.25],
    spin: 0,
    spinnable: true, //adj.	Capable of being spun.
    winner: 0,
    phase: 'waiting',
  }
  componentDidMount() {
    this.spinAudio = new Audio('/spin.m4a')
  }
  handleSpin = async () => {
    this.setState(start)
    await wait(100)
    this.setState(spin)
    this.spinAudio.play()
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
        <Arrow spin={this.state.spin} />
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
