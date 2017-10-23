import React from 'react'

export default ({ state }) => (
  <div className="content">
    <div>Sizes: {JSON.stringify(state.sizes)}</div>
    <div>Roll: {JSON.stringify(state.roll)}</div>
    <style jsx>{`
      .content {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0.5rem;
        padding: 1rem;
        text-align: left;
        color: white;
        font-family: monospace;
        background-color: black;
        opacity: 0.6;
        user-select: none;
      }
    `}</style>
  </div>
)
