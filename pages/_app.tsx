/* eslint-disable no-unused-vars */
import { AppProps } from 'next/app'

import Chakra from '../components/chakra'
import Layout from '../components/layout'
import Fonts from '../components/fonts'

import NextNProgress from 'nextjs-progressbar'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function App({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
        <NextNProgress color="#000" height={3} />
      </Layout>
    </Chakra>
  )
}

export default App
