import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RiPhoneFill } from 'react-icons/ri'

import { H3, P, ButtonIconText } from '../atoms'
import msToTime from '../../utils/msToTime'
import { useCallsContext } from '../../utils/context'

const Wrapper = styled.div`
  border: 1px solid black;
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.isTerminating ? 0.4 : 1)};
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
    <Wrapper isTerminating={isTerminating}>
      <P>{state}</P>
      <H3>{id}</H3>
      <P>{contact}</P>
      <P>{state === 'RING' ? 'ringing...' : timer}</P>
      <ButtonIconText onClick={() => handleTerminateCall(id)} label="end call">
        <RiPhoneFill />
      </ButtonIconText>
    </Wrapper>
  )
}

CallCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['RING', 'ACTIVE']).isRequired,
  initiatedAt: PropTypes.string,
  answeredAt: PropTypes.string,
}

export default CallCard
