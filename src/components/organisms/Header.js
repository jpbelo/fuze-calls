import React from 'react'
import styled from 'styled-components'

import { H1 } from '../atoms/Headings'

const Wrapper = styled.header`
  padding: 8px 16px;
  background-color: #f8f8f8;
`

const Header = () => {
  return (
    <Wrapper>
      <H1>Fuze Calls Challenge</H1>
    </Wrapper>
  )
}

export default Header
