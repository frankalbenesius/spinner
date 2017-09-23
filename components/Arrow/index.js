import React from 'react'

import { sectorRadius, center } from '../constants'
import colors from '../colors'

export default ({ roll }) => {
  const circumference = 2 * Math.PI * sectorRadius
  const arc = 0.005 * circumference
  const rotation = roll / 1000 * circumference
  return (
    <g>
      <circle
        r={sectorRadius}
        cx={center}
        cy={center}
        fill="none"
        stroke={colors.black}
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
