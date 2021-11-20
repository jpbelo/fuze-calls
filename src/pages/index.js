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
  height: 100%;
  display: flex;
  border: 1px solid red;
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
        <div>
          <InputContact />
          <Calls />
        </div>
        <History />
      </Main>
      <Footer />
    </div>
  )
}
