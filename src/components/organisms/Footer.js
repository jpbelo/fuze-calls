import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  padding: 12px 16px;
  background-color: #f8f8f8;
`

const Footer = () => {
  return (
    <Wrapper>
      <a
        href="https://github.com/jpbelo/fuze-calls"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    </Wrapper>
  )
}

export default Footer
