import Head from 'next/head'
import { Box, Container, Grid } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

import Navbar from './navbar'
import Topbar from './topbar'

type routerProps = {
  asPath: string
}

type MainProps = {
  children?: ReactNode
  router: routerProps
}

// eslint-disable-next-line no-unused-vars
const Main: FC<MainProps> = ({ children, router }) => {
  const gridCols = '22rem calc(100% - 25rem)'

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Coffee App - Evaluations</title>
      </Head>
      <Topbar />
      <Container maxW="8xl" mt={5}>
        <Grid templateColumns={['100%', '100%', gridCols]} gap={10}>
          <Navbar path={router.asPath} />
          <Box>{children}</Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Main
