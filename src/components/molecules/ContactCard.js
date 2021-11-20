import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RiDeleteBin5Fill, RiPhoneFill } from 'react-icons/ri'

import { H3, P } from '../atoms'
import { ButtonIconText } from '../atoms'
import { useCallsContext } from '../../utils/context'

const Wrapper = styled.div`
  border: 1px solid black;
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.isDeleting ? 0.3 : 1)};
`

const ContactCard = props => {
  const { id, contact } = props
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')
  const { removeContact, initCall } = useCallsContext()

  const handleDeleteClick = id => {
    setIsDeleting(true)
    removeContact(id).catch(() => {
      setDeleteError('failed to delete')
      setIsDeleting(false)
    })
  }

  return (
    <Wrapper isDeleting={isDeleting}>
      <H3>{id}</H3>
      <P>{contact}</P>
      <ButtonIconText
        label={deleteError}
        type="button"
        onClick={() => handleDeleteClick(id)}
      >
        <RiDeleteBin5Fill />
      </ButtonIconText>
      <ButtonIconText type="button" onClick={() => initCall(contact)}>
        <RiPhoneFill />
      </ButtonIconText>
    </Wrapper>
  )
}

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
}

export default ContactCard
