import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RiPhoneFill } from 'react-icons/ri'

import { useCallsContext } from '../../utils/context'
import msToTime from '../../utils/msToTime'
import { ButtonIconText, H3, P } from '../atoms'

const Wrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 12px;
  display: flex;
  justify-content: space-between;
`

const HistoryCard = props => {
  const { contact, initiatedAt, terminatedAt, answeredAt } = props
  const { initCall } = useCallsContext()

  let callDuration
  if (!answeredAt) {
    callDuration = 'no answer'
  } else {
    callDuration = msToTime(new Date(terminatedAt) - new Date(answeredAt))
  }
  const callInitiatedAt = new Date(initiatedAt)

  return (
    <Wrapper>
      <div>
        <H3 mb={'8px'}>{contact}</H3>
        <P mb={'4px'}>duration: {callDuration}</P>
        <P>{callInitiatedAt.toLocaleString()}</P>
      </div>
      <ButtonIconText
        type="button"
        onClick={() => initCall(contact)}
        title="call"
      >
        <RiPhoneFill />
      </ButtonIconText>
    </Wrapper>
  )
}

HistoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
}

export default HistoryCard
