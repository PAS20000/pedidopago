import GlobalProvider from "../src/context"
import '../src/style/reset.css'
import type { AppProps } from 'next/app'

const PedidoPagoApp = ({ 
  Component, 
  pageProps 
} : AppProps) => {

  return (
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
  )
}

export default PedidoPagoApp