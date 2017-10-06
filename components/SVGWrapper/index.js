import React from 'react'

import { viewBoxSize, center } from '../constants'
import colors from '../colors'

export default ({ onClick, children }) => (
  <svg onClick={onClick} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
    {children}
    <style jsx>
      {`
        svg {
          display: block;
          width: 100vmin;
          height: 100vmin;
          transform: rotate(-90deg);
        }
      `}
    </style>
  </svg>
)
