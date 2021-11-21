import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Visible } from 'react-awesome-styled-grid'

import { H1 } from '../atoms'

const Wrapper = styled.header`
  padding: 20px 16px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
`

const Header = ({ contactsButton, historyButton }) => {
  return (
    <Wrapper>
      <Visible xs>
        <button onClick={contactsButton}>contacts</button>
      </Visible>
      <H1>Fuze Calls Challenge</H1>
      <Visible xs>
        <button onClick={historyButton}>history</button>
      </Visible>
    </Wrapper>
  )
}

Header.propTypes = {
  contactsButton: PropTypes.func.isRequired,
  historyButton: PropTypes.func.isRequired,
}

export default Header
