import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Formik } from 'formik'
import { RiPhoneFill, RiAddCircleFill } from 'react-icons/ri'

import { ButtonIconText, H2 } from '../atoms'
import { useCallsContext } from '../../utils/context'

const Wrapper = styled.div`
  background-color: rgba(0, 255, 255, 0.1);
  padding: 16px;
  ${space};
`

const InputContact = () => {
  const { addContact, initCall } = useCallsContext()

  const handleClickCall = (e, contact) => {
    e.preventDefault()
    initCall(contact)
  }

  return (
    <Wrapper>
      <H2>InputContact</H2>
      <Formik
        initialValues={{ contact: '' }}
        onSubmit={(values, actions) => {
          addContact(values.contact)
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.contact}
              name="contact"
            />
            <ButtonIconText type="submit" label="Add contact">
              <RiAddCircleFill />
            </ButtonIconText>
            <ButtonIconText
              type="button"
              label="Call"
              onClick={e => handleClickCall(e, props.values.contact)}
            >
              <RiPhoneFill />
            </ButtonIconText>
          </form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default InputContact
