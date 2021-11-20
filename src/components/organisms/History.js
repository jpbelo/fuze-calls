import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { H2 } from '../atoms'
import { useCallsContext } from '../../utils/context'

const Wrapper = styled.div`
  background-color: rgba(0, 0, 255, 0.05);
  padding: 16px;
  ${space};
`

const History = () => {
  const { history } = useCallsContext()

  return (
    <Wrapper>
      <H2>History</H2>
      <div>
        {history.map(call => (
          <div key={call.id}>
            <p>{call.contact}</p>
            <p>{call.terminatedAt}</p>
            <p>{call.answeredAt}</p>
            <p>terminatedAt - answeredAt</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default History
