import React from 'react'
import styled from 'styled-components'

import { P } from '../atoms'

const Wrapper = styled.footer`
  padding: 12px 16px;
`

const Footer = () => {
  return (
    <Wrapper>
      <P>
        <a
          href="https://github.com/jpbelo/fuze-calls"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </P>
    </Wrapper>
  )
}

export default Footer
