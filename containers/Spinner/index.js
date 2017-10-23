import React from 'react'
import { sum } from 'lodash'

import { spin, land, celebrate, resize, reset } from './actions'

import SVGWrapper from '../../components/SVGWrapper'
import Sector from '../../components/Sector'
import Arrow from '../../components/Arrow'
import SpinButton from '../../components/SpinButton'
import StateDisplay from '../../components/StateDisplay'

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

class Spinner extends React.Component {
  state = {
    sizes: [250, 250, 250, 250],
    reduction: 0.75,
    spin: 0,
    spinnable: true, //adj.	Capable of being spun.
    phase: 'waiting',
  }
  handleSpin = async () => {
    this.setState(spin)
    await wait(100)
    this.setState(land)
    await wait(800)
    this.setState(celebrate)
    await wait(200)
    this.setState(resize)
    await wait(500)
    this.setState(reset)
  }
  render() {
    return (
      <div>
        <SVGWrapper>
          {this.state.sizes.map((size, i, sizes) => (
            <Sector
              key={i}
              index={i}
              size={size}
              start={sum(sizes.slice(0, i))}
            />
          ))}
          <Arrow spin={this.state.spin} total={sum(this.state.sizes)} />
          <SpinButton
            disabled={!this.state.spinnable}
            onClick={this.handleSpin}
          />
        </SVGWrapper>
        <StateDisplay
          shouldRender={this.props.query.state !== undefined}
          state={this.state}
        />
      </div>
    )
  }
}

export default Spinner
