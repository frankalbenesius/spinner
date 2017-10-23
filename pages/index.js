import React from 'react'

import Wrapper from '../components/Wrapper'
import Spinner from '../containers/Spinner'

const IndexPage = ({ query }) => (
  <Wrapper>
    <Spinner query={query} />
  </Wrapper>
)

IndexPage.getInitialProps = ({ query }) => {
  return { query }
}

export default IndexPage
