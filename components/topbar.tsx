import { Search2Icon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue
} from '@chakra-ui/react'
import { FC } from 'react'

import ButtonTheme from './button-theme'
import Coffee from './icons/coffee'

const Topbar: FC<unknown> = () => {
  const logoColor = useColorModeValue('#000', '#fff')
  const borderBottom = useColorModeValue('gray.100', 'dark')

  return (
    <Box h="4em" borderBottom="0.188rem solid" borderColor={borderBottom}>
      <Container maxW="8xl" h="full">
        <Flex align="center" h="full" justify="space-between">
          <Box display={['none', 'none', 'block']}>
            <Coffee fill={logoColor} />
          </Box>
          <InputGroup w={['70%', '70%', '50%']} variant="filled">
            <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
            <Input type="tel" placeholder="Buscar" />
          </InputGroup>
          <Box display={['none', 'none', 'block']}>
            <ButtonTheme />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Topbar
