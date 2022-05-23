import GlobalProvider from "../src/context"

function MyApp({ Component, pageProps }) {
  return (
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
  )
}

export default MyApp