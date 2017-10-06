import React from 'react'
import Head from 'next/head'

import colors from '../colors'

export default ({ children }) => (
  <div className="flex">
    <Head>
      <title>SPINNER</title>
      <link rel="icon" href="/static/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Dosis"
        rel="stylesheet"
      />
    </Head>
    {children}
    <style jsx>{`
      .flex {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    <style jsx global>
      {`
        body {
          background-color: ${colors.black};
          margin: 0;
          font-family: Dosis, Arial, Helvetica, sans-serif;
        }
        * > * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>
)
