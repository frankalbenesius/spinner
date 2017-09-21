import React from 'react'
import { padStart } from 'lodash'

import { roll } from './actions'
import StateDisplay from '../StateDisplay'

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
    reduction: 0.5,
    roll: 0,
    winner: undefined,
  }
  handleRoll = () => {
    this.setState(roll)
  }
  render() {
    return (
      <div>
        <div className="circle" onClick={this.handleRoll} />
        <StateDisplay state={this.state} />
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
      </div>
    )
  }
}

export default Spinner
