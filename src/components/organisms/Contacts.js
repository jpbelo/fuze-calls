import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { useCallsContext } from '../../utils/context'
import { H2 } from '../atoms'
import { ContactCard } from '../molecules'

const Wrapper = styled.div`
  background-color: rgba(0, 255, 0, 0.05);
  padding: 16px;
  ${space};
`

const Contacts = () => {
  const { contacts } = useCallsContext()

  return (
    <Wrapper>
      <H2>Contacts</H2>
      <div>
        {contacts.map(contact => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Contacts
