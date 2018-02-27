import React from 'react'
import { Motion, spring } from 'react-motion'

import { sectorRadius, center, sectorColors } from '../constants'
const circumference = 2 * Math.PI * sectorRadius
const textLine = center / 1.5
import colors from '../colors'

export default ({ index, size, startAt }) => {
  const arc = size * circumference
  const rotation = startAt * circumference
  const shades = colors[sectorColors[index]]
  const textRotation = (startAt + size / 2) * 360
  return (
    <g>
      <defs>
        <path
          id="textCircle"
          d={`
          M ${center} ${center}
          m -${textLine}, 0
          a ${textLine},${textLine} 0 0,1 ${textLine * 2},0
          a ${textLine},${textLine} 0 0,1 -${textLine * 2},0
          `}
          transform={`rotate(180, ${center}, ${center})`}
        />
      </defs>
      <Motion style={{ rotation: spring(rotation), arc: spring(arc) }}>
        {interpolated => (
          <circle
            r={sectorRadius}
            cx={center}
            cy={center}
            fill="none"
            stroke={shades[5]}
            strokeWidth={sectorRadius * 2}
            strokeDasharray={`0 ${interpolated.rotation} ${interpolated.arc} ${circumference}`}
          />
        )}
      </Motion>
      <Motion style={{ textRotation: spring(textRotation) }}>
        {interpolated => (
          <text
            fill={shades[7]}
            transform={`rotate(${interpolated.textRotation}, ${center}, ${center})`}
          >
            <textPath xlinkHref="#textCircle">{index + 1}</textPath>
          </text>
        )}
      </Motion>
      <style jsx>{`
        text {
          font-size: 0.6rem;
          text-anchor: middle;
        }
      `}</style>
    </g>
  )
}
