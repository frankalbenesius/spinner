import React from 'react'

import { sectorRadius, center } from '../constants'
import colors from '../colors'

export default ({ roll, total }) => {
  const rotation = roll / total * 360
  const length = center * 2 - 12
  return (
    <g transform={`rotate(${rotation}, ${center}, ${center})`}>
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
      <style jsx>{`
        g {
          transition: 0.5s;
        }
        path {
        }
      `}</style>
    </g>
  )
}
