import React from 'react'

import colors from '../colors'

export default ({ onClick, children }) => (
  <svg onClick={onClick} viewBox="0 0 100 100">
    {children}
    <circle r={2} cx={50} cy={50} fill={colors.black} />
    <style jsx>
      {`
        svg {
          display: block;
          width: 100vmin;
          height: 100vmin;
          margin: 0 auto;
          transform: rotate(-90deg);
        }
      `}
    </style>
  </svg>
)
