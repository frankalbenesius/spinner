import React from 'react'
import { padStart, sum } from 'lodash'

const roll = state => {
  const roll = Math.floor(Math.random() * 1000)
  const rangeStarts = [0, 1, 2, 3].map(i => getRangeStart(state, i))
  let winner = 4
  if (roll < rangeStarts[3]) {
    winner = 3
  }
  if (roll < rangeStarts[2]) {
    winner = 2
  }
  if (roll < rangeStarts[1]) {
    winner = 1
  }
  return {
    ...state,
    roll,
    winner,
  }
}

const getRangeStart = (state, sector) => {
  return sum(state.sectors.slice(0, sector))
}

class Spinner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sectors: [250, 250, 250, 250],
      history: [0, 0, 0, 0],
      roll: undefined,
      winner: undefined,
    }
  }
  render() {
    return (
      <div className="circle">
        <div className="testing-state">
          Current State<br />
          <br />
          Quadrants:<br />
          {this.state.sectors.map((sector, i) => (
            <div key={i}>
              Q{i + 1}: {sector} |{' '}
              {padStart(getRangeStart(this.state, i), 3, '0')} |{' '}
              {padStart(this.state.history[i], 2, '0')}
              <br />
            </div>
          ))}
          <br />
          Shrink Factor: 30%<br />
          <br />
          Random Number:{' '}
          {this.state.roll ? padStart(this.state.roll, 3, '0') : 'undefined'}
          <br />
          Winning Quadrant: {this.state.winner || 'undefined'}
          <br />
          <br />
          <button onClick={() => this.setState(roll)}>spin</button>
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
      </div>
    )
  }
}

export default Spinner
