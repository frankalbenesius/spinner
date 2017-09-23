import React from 'react'

import { sectorRadius, center } from '../constants'
import colors from '../colors'

const sectorColors = [
  colors.blue[5],
  colors.red[5],
  colors.yellow[5],
  colors.green[5],
]

export default ({ sector, index }) => {
  const circumference = 2 * Math.PI * sectorRadius
  const arc = sector.size / 1000 * circumference
  const rotation = sector.start / 1000 * circumference
  return (
    <g>
      <circle
        r={sectorRadius}
        cx={center}
        cy={center}
        fill="none"
        stroke={sectorColors[index]}
        strokeWidth={sectorRadius * 2}
        strokeDasharray={`0 ${rotation} ${arc} ${circumference}`}
      />
      <style jsx>{`
        circle {
          transition: stroke-dasharray 0.5s;
        }
      `}</style>
    </g>
  )
}
