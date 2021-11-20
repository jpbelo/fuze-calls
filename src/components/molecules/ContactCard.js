import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H3, P } from '../atoms'

const Wrapper = styled.div`
  border: 1px solid black;
`

const ContactCard = props => {
  return (
    <Wrapper>
      <H3>{props.id}</H3>
      <P>{props.contact}</P>
    </Wrapper>
  )
}

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
}

export default ContactCard
