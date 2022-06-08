import { Box, Flex, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FC, ReactNode, useState } from 'react'

import Banner from './banner'
import CardProfile from './card-profile'

interface baseProps {
  path: string
}

import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { HamburgerIcon } from '@chakra-ui/icons'
import Crown from './icons/crown'
import Glasses from './icons/glasses'
import Home from './icons/home'

interface LinkItemProps {
  href: string
  path: string
  target?: string
  children: ReactNode
  icon?: ReactNode
}

const LinkItem: FC<LinkItemProps> = ({
  href,
  path,
  target,
  children,
  icon,
  ...props
}) => {
  const active = path === href
  const color = useColorModeValue('gray.500', 'white')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        variant="unstyled"
        p={2}
        color={active ? 'secondary' : color}
        fontWeight={active ? 600 : 500}
        target={target}
        display="flex"
        gap={2}
        alignItems="center"
        letterSpacing="-0.01rem"
        _hover={{
          color: 'secondary'
        }}
        transition="0.2s all ease-in-out"
        {...props}
      >
        {icon}
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar: FC<baseProps> = props => {
  const color = useColorModeValue('lightColorMode', 'darkColorMode')
  const fillIcon = useColorModeValue('#000', '#fff')

  const [showMenu, setShowMenu] = useState(false)
  const navClassProperty = showMenu ? 'flex' : 'none'

  const { path } = props

  return (
    <Box className="navbar">
      <IconButton
        aria-label="Toggle menu"
        zIndex={100}
        position="absolute"
        right={2}
        top={2}
        icon={<HamburgerIcon />}
        display={['block', 'block', 'none']}
        onClick={() => setShowMenu(!showMenu)}
      />
      <Flex
        display={[navClassProperty, navClassProperty, 'flex']}
        bg={color}
        top={0}
        left={0}
        position={['fixed', 'fixed', 'relative']}
        p={[5, 5, 0]}
        pt={[20, 20, 0]}
        h="full"
        w="full"
        direction="column"
        gap={3}
        zIndex={99}
      >
        <CardProfile />
        <Banner />
        <Flex direction="column" mt={5} className="link-items">
          <LinkItem icon={<Home fill={fillIcon} />} href="/" path={path}>
            Inicio
          </LinkItem>
          <LinkItem
            icon={<Crown fill={fillIcon} />}
            href="/trajectories"
            path={path}
          >
            Recompensas
          </LinkItem>
          <LinkItem
            icon={<Glasses fill={fillIcon} />}
            href="/trajectories"
            path={path}
          >
            Mis trayectorias
          </LinkItem>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
