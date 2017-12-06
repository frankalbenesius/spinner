import React from 'react'
import { Motion, spring } from 'react-motion'

import { sectorRadius, center } from '../constants'
import colors from '../colors'

export default ({ spin, total }) => {
  const rotation = spin / total * 360
  const length = center * 2 - 12
  return (
    <Motion style={{ rotation: spring(rotation) }}>
      {interpolated => (
        <g transform={`rotate(${interpolated.rotation}, ${center}, ${center})`}>
          <line
            x1={center}
            y1={center}
            y2={center}
            x2={length}
            stroke={colors.black}
            strokeWidth={1.5}
          />
          {/* triangle tip: */}
          <path
            d={`
            M ${length + 2} ${center}
            l -5 3
            l 0 -6
            L ${length + 2} ${center}
            l -5 3
            `}
            fill={colors.gray[0]}
            stroke={colors.black}
          />
        </g>
      )}
    </Motion>
  )
}
