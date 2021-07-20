import React from 'react'

import { viewBoxSize, center, sectorColors } from '../constants'

import colors from '../colors'

const SpinButton = ({ onClick, disabled, winner, phase }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick()
    }
  }
  let text, textFill, circleFill
  switch (phase) {
    case 'waiting':
      text = 'SPIN'
      circleFill = colors.white // white
      break
    case 'starting':
    case 'spinning':
      text = 'SPIN'
      circleFill = colors.gray[8]
      break
    case 'celebrating':
    case 'resizing':
      text = winner + 1
      circleFill = colors[sectorColors[winner]][5]
      break
  }
  return (
    <svg onClick={handleClick} disabled={disabled}>
      <g transform={`rotate(90, ${center}, ${center})`}>
        <circle
          r={viewBoxSize / 10}
          cx={center}
          cy={center}
          fill={circleFill}
        />
        <text x={center} y={center} className={phase}>
          {text}
        </text>
      </g>
      <style jsx>
        {`
          svg {
            user-select: none;
          }
          circle {
            stroke: ${colors.black};
          }
          text {
            text-anchor: middle;
            cursor: default;
            fill: ${colors.black};
            font-size: 0.5rem;
            dominant-baseline: central;
            text-transform: uppercase;
          }
          text.celebrating,
          text.resizing {
            font-size: 1rem;
          }
        `}
      </style>
    </svg>
  )
}

export default SpinButton
