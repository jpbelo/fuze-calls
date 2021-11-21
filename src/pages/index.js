import Head from 'next/head'
import styled from 'styled-components'
import { Hidden, Visible } from 'react-awesome-styled-grid'

import {
  Header,
  Footer,
  Contacts,
  InputContact,
  Calls,
  History,
} from '../components/organisms'
import { useState } from 'react'

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  & > div {
    flex: 1;
  }
`
const MidSection = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    flex: 1;
  }
`
const MobileOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 12px;
  height: calc(50vh - 80px);
  min-height: 250px;
  width: calc(100% - 24px);
  background-color: white;
  overflow: scroll;
`

export default function Home() {
  const [showContacts, setShowContacts] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const handleContactsButtonClick = () => setShowContacts(prev => !prev)
  const handleHistoryButtonClick = () => setShowHistory(prev => !prev)

  return (
    <div>
      <Head>
        <title>Fuze Calls Challenge</title>
      </Head>
      <Header
        contactsButton={handleContactsButtonClick}
        historyButton={handleHistoryButtonClick}
      />
      <Main>
        <Hidden xs>
          <Contacts />
        </Hidden>
        <MidSection>
          <InputContact />
          <Calls />
        </MidSection>
        <Hidden xs>
          <History />
        </Hidden>
      </Main>
      <Visible xs>
        {showContacts && (
          <MobileOverlay>
            <Contacts />
          </MobileOverlay>
        )}
        {showHistory && (
          <MobileOverlay>
            <History />
          </MobileOverlay>
        )}
      </Visible>
      <Footer />
    </div>
  )
}
