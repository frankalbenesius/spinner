import React from 'react'

export default ({ state }) => (
  <div className="content">
    <table>
      <tbody>
        {state.sectors.map((sector, i) => (
          <tr key={i} style={{ color: i === state.winner ? 'red' : 'white' }}>
            <td>{i}</td>
            <td>{sector.size}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
      .content {
        position: fixed;
        padding: 0.5rem 0;
        top: 0;
        left: 0;
        text-align: center;
        color: white;
        font-family: monospace;
        background-color: black;
        opacity: 0.9;
        user-select: none;
      }
      table {
        margin: 0 auto;
      }
      th,
      td {
        font-weight: normal;
        padding: 0.2rem 0.5rem;
      }
    `}</style>
  </div>
)
