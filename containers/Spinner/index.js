import React, { useState } from 'react'
import { sum } from 'lodash'

import { start, spin, celebrate, resize, end } from './actions'
import { spinMs } from '../../components/constants'

import SVGWrapper from '../../components/SVGWrapper'
import Sector from '../../components/Sector'
import Arrow from '../../components/Arrow'
import SpinButton from '../../components/SpinButton'
import useSectorPress from '../../hooks/useSectorPress'

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

function Spinner() {
  const [state, setState] = useState({
    numSpins: 0,
    sizes: [0.25, 0.25, 0.25, 0.25],
    spin: 0,
    spinnable: true, //adjective: Capable of being spun.
    winner: 0,
    phase: 'waiting',
  })

  const { pressedSector, resetPressedSector } = useSectorPress()

  const handleSpin = async () => {
    setState(start)
    await wait(100)
    setState(spin(pressedSector))
    resetPressedSector()

    new Audio('/spin.m4a').play()

    await wait(spinMs)
    setState(celebrate)
    await wait(1500)
    setState(resize)
    await wait(500)
    setState(end)
  }

  return (
    <SVGWrapper>
      {state.sizes.map((size, i, sizes) => (
        <Sector
          key={i}
          index={i}
          size={size}
          startAt={sum(sizes.slice(0, i))}
        />
      ))}
      <Arrow spin={state.spin} />
      <SpinButton
        numSpins={state.numSpins}
        disabled={!state.spinnable}
        onClick={handleSpin}
        winner={state.winner}
        phase={state.phase}
      />
    </SVGWrapper>
  )
}

export default Spinner
