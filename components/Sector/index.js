import React from 'react'

export default ({ sector }) => {
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
        stroke={sector.color}
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
