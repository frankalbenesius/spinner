import React from 'react'

import colors from '../colors'

const sectorColors = [
  colors.blue[5],
  colors.red[5],
  colors.yellow[5],
  colors.green[5],
]

export default ({ sector, index }) => {
  const radius = 23
  const circumference = 2 * Math.PI * radius
  const arc = sector.size / 1000 * circumference
  const rotation = sector.start / 1000 * circumference
  return (
    <g>
      <circle
        r={radius}
        cx={50}
        cy={50}
        fill="none"
        stroke={sectorColors[index]}
        strokeWidth={radius * 2}
        strokeDasharray={`0 ${rotation} ${arc} ${2 * Math.PI * 45}`}
      />
      <style jsx>{`
        circle {
          transition: stroke-dasharray 0.5s;
        }
      `}</style>
    </g>
  )
}
