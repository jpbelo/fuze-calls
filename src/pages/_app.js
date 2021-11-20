import '../styles/reset.css'

import 'fontsource-open-sans/300.css'
import 'fontsource-open-sans/400.css'
import 'fontsource-open-sans/600.css'
import 'fontsource-open-sans/700.css'

import { ProvideCallsContext } from '../utils/context'

function MyApp({ Component, pageProps }) {
  return (
    <ProvideCallsContext>
      <Component {...pageProps} />
    </ProvideCallsContext>
  )
}

export default MyApp
