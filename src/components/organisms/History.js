import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { H2 } from '../atoms'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 255, 0.05);
  padding: 16px;
  ${space};
`

const History = () => {
  return (
    <Wrapper>
      <H2>History</H2>
    </Wrapper>
  )
}

export default History
