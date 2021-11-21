import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H3, P } from '../atoms'

const Wrapper = styled.div`
  border: 1px solid black;
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.isDeleting ? 0.3 : 1)};
`

const HistoryCard = props => {
  const { id, contact } = props

  return (
    <Wrapper>
      <H3>{id}</H3>
      <P>{contact}</P>
    </Wrapper>
  )
}

HistoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
}

export default HistoryCard
