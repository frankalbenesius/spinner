import React from 'react'
import { padStart } from 'lodash'

import { roll } from './actions'

class Spinner extends React.Component {
  state = {
    sectors: [
      {
        size: 250,
        start: 0,
        wins: 0,
      },
      {
        size: 250,
        start: 250,
        wins: 0,
      },
      {
        size: 250,
        start: 500,
        wins: 0,
      },
      {
        size: 250,
        start: 750,
        wins: 0,
      },
    ],
    roll: 0,
    winner: undefined,
  }
  handleRoll = () => {
    this.setState(roll)
  }
  render() {
    return (
      <div className="circle">
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>sector</th>
                <th>size</th>
                <th>wins</th>
              </tr>
            </thead>
            <tbody>
              {this.state.sectors.map((sector, i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{sector.size}</td>
                  <td>{sector.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>roll: {this.state.roll}</div>
          <div>winner: {this.state.winner}</div>
          <button onClick={this.handleRoll}>spin</button>
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
            .content {
              padding: 5rem;
              text-align: center;
              color: white;
              font-family: monospace;
              font-size: 2rem;
            }
            table {
              margin: 0 auto;
            }
            th,
            td {
              font-weight: normal;
              padding: 0.2rem 0.5rem;
            }
            .content div {
              margin: 1rem;
            }
            button {
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
