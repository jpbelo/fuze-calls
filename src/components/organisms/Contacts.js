import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { useCallsContext } from '../../utils/context'
import { H2 } from '../atoms'

const Wrapper = styled.div`
  background-color: rgba(0, 255, 0, 0.05);
  ${space};
`

const Contacts = () => {
  const { contacts } = useCallsContext()

  return (
    <Wrapper>
      <H2>Contacts</H2>
      <div>
        {contacts.map(contact => (
          <div key={contact.id}>{contact.contact}</div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Contacts
