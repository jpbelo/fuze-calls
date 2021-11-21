import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RiPhoneFill } from 'react-icons/ri'

import { H3, P, Small, ButtonIconText } from '../atoms'
import msToTime from '../../utils/msToTime'
import { useCallsContext } from '../../utils/context'

const stateColor = {
  RING: '#00f8',
  ACTIVE: '#0f08',
  TERMINATING: '#f008',
}

const Wrapper = styled.div`
  width: 140px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 3px 3px 12px -2px #e5e5e5;
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.isTerminating ? 0.4 : 1)};
  text-align: center;
`

const CallState = styled.div`
  background-color: ${props => stateColor[props.state]};
  padding: 2px 8px;
`

const InnerCard = styled.div`
  padding: 12px 8px;
`

const CallCard = props => {
  const { id, state, contact, initiatedAt, answeredAt } = props
  const { terminateCall } = useCallsContext()

  const [timer, setTimer] = useState('...')
  const [isTerminating, setIsTerminating] = useState(false)

  useEffect(() => {
    let timeout
    if (state === 'ACTIVE') {
      timeout = setTimeout(() => {
        const delta = answeredAt
          ? new Date() - new Date(answeredAt)
          : new Date() - new Date(initiatedAt)
        setTimer(msToTime(delta))
      }, 1000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [timer, state])

  const handleTerminateCall = id => {
    setIsTerminating(true)
    terminateCall(id).catch(() => setIsTerminating(false))
  }

  return (
    <Wrapper isTerminating={isTerminating} {...props}>
      <CallState state={state}>
        <Small>{state}</Small>
      </CallState>
      <InnerCard>
        <H3 mb={'6px'}>{contact}</H3>
        <P mb={'12px'}>{state === 'RING' ? 'ringing...' : timer}</P>
        <ButtonIconText onClick={() => handleTerminateCall(id)}>
          <RiPhoneFill style={{ transform: 'rotate(135deg)' }} />
        </ButtonIconText>
      </InnerCard>
    </Wrapper>
  )
}

CallCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['RING', 'ACTIVE', 'TERMINATING']).isRequired,
  initiatedAt: PropTypes.string,
  answeredAt: PropTypes.string,
}

export default CallCard
