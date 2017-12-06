import React from 'react'
import { Motion, spring } from 'react-motion'

import { sectorRadius, center, spinMs } from '../constants'
import colors from '../colors'

export default class Arrow extends React.Component {
  state = {
    animation: 'none',
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.spin !== this.props.spin) {
      this.setState(
        {
          animation: 'spinning',
        },
        () => {
          setTimeout(() => {
            this.setState({
              animation: 'none',
            })
          }, spinMs)
        },
      )
    }
  }
  render() {
    const { spin, total } = this.props
    const rotation = spin / total * 360
    const length = center * 2 - 12
    return (
      <g className={`spinner ${this.state.animation}`}>
        {/*
          this <rect> increases the size of the parent <g> so that it fills
          up to the space of the outer <svg>. Without it, the animation of the
          <g> tag wouldn't have the correctly centered transform-origin.
        */}
        <rect width="100" height="100" fill="none" />
        <Motion
          style={{ rotation: spring(rotation, { stiffness: 25, damping: 15 }) }}
        >
          {interpolated => (
            <g
              transform={`rotate(${interpolated.rotation}, ${center}, ${center})`}
            >
              <line
                x1={center}
                y1={center}
                y2={center}
                x2={length}
                stroke={colors.black}
                strokeWidth={1.5}
              />
              {/* triangle tip: */}
              <path
                d={`
                M ${length + 2} ${center}
                l -5 3
                l 0 -6
                L ${length + 2} ${center}
                l -5 3
                `}
                fill={colors.gray[0]}
                stroke={colors.black}
              />
            </g>
          )}
        </Motion>
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(6480deg);
            }
          }
          .spinner {
            transform-origin: center;
            animation-duration: 5s;
            animation-iteration-count: 1;
          }
          .spinning {
            animation-name: spin;
          }
        `}</style>
      </g>
    )
  }
}
