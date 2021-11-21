import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import { Small } from '.'

const Wrapper = styled.button`
  background: none;
  border: none;
  width: 60px;
  padding: 4px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  color: #666;
  & > small {
    display: block;
  }
  &:hover {
    color: #000;
    background-color: #fff;
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
