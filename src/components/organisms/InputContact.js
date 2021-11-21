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
  position: relative;
  ${space};
`
const InnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-right: -50%;
  text-align: center;
`
const ContactInput = styled.input`
  padding: 8px 12px;
`
const ButtonsWrapper = styled.div`
  margin-top: 24px;
`

const InputContact = () => {
  const { addContact, initCall } = useCallsContext()

  const handleClickCall = (e, contact) => {
    e.preventDefault()
    initCall(contact)
  }

  return (
    <Wrapper>
      <H2>Input Contact</H2>
      <InnerWrapper>
        <Formik
          initialValues={{ contact: '' }}
          onSubmit={(values, actions) => {
            addContact(values.contact)
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <ContactInput
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.contact}
                name="contact"
              />
              <ButtonsWrapper>
                <ButtonIconText type="submit" label="Add contact" mr="8px">
                  <RiAddCircleFill />
                </ButtonIconText>
                <ButtonIconText
                  type="button"
                  label="Call"
                  onClick={e => handleClickCall(e, props.values.contact)}
                >
                  <RiPhoneFill />
                </ButtonIconText>
              </ButtonsWrapper>
            </form>
          )}
        </Formik>
      </InnerWrapper>
    </Wrapper>
  )
}

export default InputContact
