import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Wrapper = styled.div`
  background-color: rgba(0, 255, 255, 0.1);
  ${space};
`

const InputContact = () => {
  return (
    <Wrapper>
      <p>InputContact</p>
    </Wrapper>
  )
}

export default InputContact
