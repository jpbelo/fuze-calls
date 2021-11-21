import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { H2 } from '../atoms'
import { CallCard } from '../molecules'
import { useCallsContext } from '../../utils/context'

const Wrapper = styled.div`
  padding: 16px;
  overflow: hidden;
  ${space};
`
const ListWrapper = styled.div`
  height: 100%;
  overflow: scroll;
  & > div {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`

const Calls = () => {
  const { calls } = useCallsContext()
  return (
    <Wrapper>
      <H2 mb={24}>Calls ({calls.length})</H2>
      <ListWrapper>
        <div>
          {calls.map(call => (
            <CallCard {...call} key={call.id} mb={16} />
          ))}
        </div>
      </ListWrapper>
    </Wrapper>
  )
}

export default Calls
