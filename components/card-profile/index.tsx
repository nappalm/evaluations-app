import { SettingsIcon, StarIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Flex,
  Heading,
  IconButton,
  Progress,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import { FC } from 'react'

const User: FC<unknown> = () => {
  return (
    <Flex align="center" gap={5} className="user">
      <Box>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGxw-4CAXdySQ/profile-displayphoto-shrink_200_200/0/1646427969740?e=1660176000&v=beta&t=WOXAUViHx9Wan2vrsHdDFeDWLOXK7qmhGrU1C-ANcJg"
          size="md"
          bg="secondary"
          name="Manuel Morales"
        />
      </Box>
      <Flex direction="column">
        <Heading variant="user-name" noOfLines={1}>
          Manuel Morales
        </Heading>
        <Text>Front End Enginner</Text>
        <Flex gap={1} mt={1}>
          <StarIcon color="yellow.500" />
          <StarIcon color="yellow.500" />
          <StarIcon color="yellow.500" />
          <StarIcon color="gray.300" />
          <StarIcon color="gray.300" />
        </Flex>
      </Flex>
    </Flex>
  )
}

const UserProgress: FC<unknown> = () => {
  return <Progress colorScheme="purple" size="xs" value={43} />
}

interface userItemProps {
  title: string
  value: number | string
}

const UserItem: FC<userItemProps> = props => {
  const bgColor = useColorModeValue('gray.100', 'dark')

  return (
    <Flex
      cursor="pointer"
      px={2}
      w="full"
      direction="column"
      borderRadius="md"
      transition="all 0.22s ease-in-out"
      _hover={{
        bg: bgColor
      }}
    >
      <Text fontSize="xl" fontWeight={600}>
        {props.value}
      </Text>
      <Text letterSpacing="-0.03rem" fontSize="sm" color="gray.500">
        {props.title}
      </Text>
    </Flex>
  )
}

const CardProfile: FC<unknown> = () => {
  const color = useColorModeValue('lightColorMode', 'darkColorMode')
  const border = useColorModeValue('gray.200', 'dark')

  return (
    <Box
      position="relative"
      className="card-profile"
      border="0.188rem solid"
      borderColor={border}
      borderRadius="xl"
      bg={color}
      w="full"
      p={5}
    >
      <IconButton
        aria-label="Config profile"
        variant="ghost"
        position="absolute"
        top={3}
        right={3}
        size="xs"
        icon={<SettingsIcon />}
      />
      <Flex direction="column" gap={5}>
        <User />
        <UserProgress />
      </Flex>
      <Flex gap={2} mt={5}>
        <UserItem title="Evaluaciones" value={6} />
        <UserItem title="Proyectos" value={9} />
        <UserItem title="Por terminar" value="66%" />
      </Flex>
    </Box>
  )
}

export default CardProfile
