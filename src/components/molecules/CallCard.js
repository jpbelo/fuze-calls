import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H3 } from '../atoms/Headings'

const Wrapper = styled.div``

const CallCard = props => {
  return (
    <Wrapper>
      <H3>{props.id}</H3>
      <p>{props.contact}</p>
    </Wrapper>
  )
}

CallCard.propTypes = {
  id: PropTypes.number.isRequired,
}

export default CallCard
