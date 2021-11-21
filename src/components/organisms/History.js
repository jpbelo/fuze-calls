import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { H2 } from '../atoms'
import { HistoryCard } from '../molecules'
import { useCallsContext } from '../../utils/context'

const Wrapper = styled.div`
  background-color: rgba(252, 226, 67, 0.1);
  padding: 16px;
  overflow: hidden;
  ${space};
`
const ListWrapper = styled.div`
  height: 100%;
  padding-bottom: 60px;
  overflow: scroll;
`

const History = () => {
  const { history } = useCallsContext()

  return (
    <Wrapper>
      <H2 mb={24}>History</H2>
      <ListWrapper>
        <div>
          {history.map(call => (
            <HistoryCard key={call.id} {...call} />
          ))}
        </div>
      </ListWrapper>
    </Wrapper>
  )
}

export default History
