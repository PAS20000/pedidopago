import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='pt'>
        <Head />
        <body style={{margin:0, padding:0, fontFamily:'sans-serif'}}>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}