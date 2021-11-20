import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { H2 } from '../atoms'
import { CallCard } from '../molecules'
import { useCallsContext } from '../../utils/context'

const Wrapper = styled.div`
  background-color: rgba(255, 0, 0, 0.05);
  padding: 16px;
  ${space};
`

const Calls = () => {
  const { calls } = useCallsContext()
  return (
    <Wrapper>
      <H2>Calls</H2>
      <p>{calls.length}</p>
      <div>
        {calls.map(call => (
          <CallCard key={call.id} {...call} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Calls
