import React from 'react'

import colors from '../colors'

export default ({ children }) => (
  <div className="flex">
    {children}
    <style jsx>{`
      .flex {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    <style jsx global>
      {`
        body {
          background-color: ${colors.black};
          margin: 0;
        }
        * > * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
)
