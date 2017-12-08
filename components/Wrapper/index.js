import React from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga'
import FontLoader from './FontLoader'
import colors from '../colors'

export default class Wrapper extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize('UA-81640506-3')
      window.GA_INITIALIZED = true
    }
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
  render() {
    return (
      <div className="flex">
        <Head>
          <title>SPINNER</title>
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <FontLoader /> {/* async font loading */}
        {this.props.children}
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
            }
            * > * {
              box-sizing: border-box;
            }
          `}
        </style>
      </div>
    )
  }
}
