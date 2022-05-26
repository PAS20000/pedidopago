import GlobalProvider from "../src/context"
import '../src/style/reset.css'

function MyApp({ Component, pageProps }) {

  return (
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
  )
}

export default MyApp