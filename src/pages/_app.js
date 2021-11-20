import '../styles/reset.css'

import { ProvideCallsContext } from '../utils/context'

function MyApp({ Component, pageProps }) {
  return (
    <ProvideCallsContext>
      <Component {...pageProps} />
    </ProvideCallsContext>
  )
}

export default MyApp
