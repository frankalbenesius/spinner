import React from 'react'

import colors from '../colors'

export default ({ children }) => (
  <div>
    {children}
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
