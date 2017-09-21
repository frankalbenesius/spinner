import React from 'react'

export default ({ onClick, children }) => (
  <svg onClick={onClick} viewBox="0 0 100 100">
    {children}
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
