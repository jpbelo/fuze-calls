import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import { Small } from '.'

const Wrapper = styled.button`
  background: none;
  border: none;
  width: 50px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  & > small {
    display: block;
  }
  &:hover {
    color: #999;
  }
  ${space};
`

const ButtonIconText = props => {
  const { children, label } = props
  return (
    <Wrapper {...props}>
      {children}
      {label && <Small>{label}</Small>}
    </Wrapper>
  )
}

ButtonIconText.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
}
ButtonIconText.defaultProps = {
  label: '',
}

export default ButtonIconText
