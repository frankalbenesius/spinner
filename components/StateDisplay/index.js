import React from 'react'

export default ({ shouldRender, state }) => {
  if (!shouldRender) return null
  return (
    <div className="content">
      <div>Phase: {state.phase}</div>
      <div>Spinnable: {JSON.stringify(state.spinnable)}</div>
      <div>Sizes: {JSON.stringify(state.sizes)}</div>
      <div>Spin: {JSON.stringify(state.spin)}</div>
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
}
