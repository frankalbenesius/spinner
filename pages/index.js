import React from 'react'

import Spinner from '../containers/Spinner'

const IndexPage = () => (
  <div>
    <Spinner />
    <style jsx global>
      {`
        body {
          background-color: #ddd;
          margin: 0;
        }
        * > * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
)

export default IndexPage
