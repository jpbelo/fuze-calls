import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { useCallsContext } from '../../utils/context'
import { H2 } from '../atoms'
import { ContactCard } from '../molecules'

const Wrapper = styled.div`
  background-color: rgba(0, 255, 0, 0.05);
  padding: 16px;
  overflow: hidden;
  ${space};
`
const ListWrapper = styled.div`
  height: calc(100% - 50px);
  overflow: scroll;
`

const Contacts = () => {
  const { contacts } = useCallsContext()

  return (
    <Wrapper>
      <H2 mb={24}>Contacts</H2>
      <ListWrapper>
        <div>
          {contacts.map(contact => (
            <ContactCard key={contact.id} {...contact} />
          ))}
        </div>
      </ListWrapper>
    </Wrapper>
  )
}

export default Contacts
