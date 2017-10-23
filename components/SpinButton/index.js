import React from 'react'

import { viewBoxSize, center } from '../constants'

import colors from '../colors'

export default ({ onClick, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick()
    }
  }
  return (
    <svg onClick={handleClick} disabled={disabled}>
      <g transform={`rotate(90, ${center}, ${center})`}>
        <circle
          r={viewBoxSize / 10}
          cx={center}
          cy={center}
          className={disabled ? 'disabled' : 'enabled'}
        />
        <text x={center} y={center}>
          SPIN
        </text>
      </g>
      <style jsx>
        {`
          svg {
            user-select: none;
          }
          svg circle {
            fill: ${colors.gray[0]};
            stroke: ${colors.black};
            transition: 0.3s fill;
          }
          svg:hover circle {
            fill: ${colors.gray[1]};
          }
          svg circle.disabled {
            fill: ${colors.gray[8]};
          }
          text {
            text-anchor: middle;
            cursor: default;
            fill: ${colors.black};
            font-size: 0.5rem;
            dominant-baseline: central;
            text-transform: uppercase;
          }
        `}
      </style>
    </svg>
  )
}
