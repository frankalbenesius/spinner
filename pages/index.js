import React from 'react'

const IndexPage = () => (
  <div>
    <div className="circle">
      <div className="testing-state">
        Current State<br />
        <br />
        Quadrants:<br />
        Q1: 250 | 000 | 00
        <br />
        Q2: 250 | 250 | 00
        <br />
        Q3: 250 | 500 | 00
        <br />
        Q4: 250 | 750 | 00
        <br />
        <br />
        Shrink Factor: 30%<br />
        <br />
        Random Number: undefined<br />
        Winning Quadrant: undefined<br />
        <br />
        <button>spin</button>
      </div>
    </div>
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
        .testing-state {
          color: white;
          font-size: 2rem;
          padding: 5rem 0;
          text-align: center;
          font-family: monospace;
        }
        .testing-state button {
          border: none;
          border-radius: 0.2rem;
          background-color: white;
          padding: 1rem 2rem;
          font-size: 2rem;
          font-family: monospace;
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
