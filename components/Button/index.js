import React from 'react'

import { viewBoxSize, center } from '../constants'

import colors from '../colors'

export default ({ onClick, children }) => (
  <svg onClick={onClick}>
    <g transform={`rotate(90, ${center}, ${center})`}>
      <circle
        r={viewBoxSize / 10}
        cx={center}
        cy={center}
        fill={colors.black}
      />
      <text x={center} y={center}>
        {children}
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
        }
        svg:hover circle {
          fill: ${colors.gray[1]};
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
