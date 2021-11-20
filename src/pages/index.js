import Head from 'next/head'
import styled from 'styled-components'

import {
  Header,
  Footer,
  Contacts,
  InputContact,
  Calls,
  History,
} from '../components/organisms'

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 100px);
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fuze Calls Challenge</title>
      </Head>
      <Header />
      <Main>
        <Contacts />
        <MidSection>
          <InputContact />
          <Calls />
        </MidSection>
        <History />
      </Main>
      <Footer />
    </div>
  )
}
