import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { H2 } from '../atoms'

const Wrapper = styled.div`
  background-color: rgba(0, 255, 255, 0.1);
  padding: 16px;
  ${space};
`

const InputContact = () => {
  return (
    <Wrapper>
      <H2>InputContact</H2>
    </Wrapper>
  )
}

export default InputContact
