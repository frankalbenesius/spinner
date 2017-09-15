import React from 'react'

const IndexPage = () => (
  <div>
    <div className="circle" />
    <style jsx>
      {`
        .circle {
          background-color: black;
          border-radius: 100%;
          width: 90vmin;
          height: 90vmin;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}
    </style>
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
