import React from 'react'

import { viewBoxSize } from '../constants'

const SVGWrapper = ({ onClick, children }) => (
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

export default SVGWrapper
