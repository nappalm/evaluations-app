import {
  Box,
  Flex,
  Heading,
  Progress,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

import styled from '@emotion/styled'

import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface baseProps {
  title: string
  description: string
  image: StaticImageData
  progress: number
  maxValue: number
  currentValue: number
}

const Wrapper = styled(Box)`
  cursor: pointer;
  position: relative;
  transition: all 0.14s ease-out;
`

const CardTrajectory: FC<baseProps> = ({
  title,
  description,
  image,
  progress,
  maxValue = 0,
  currentValue = 0
}) => {
  const color = useColorModeValue('gray.200', 'dark')

  return (
    <Wrapper
      shadow="dark"
      border="0.188rem solid"
      borderColor={color}
      borderRadius="xl"
      w="full"
      className="card-trajectory"
    >
      <Flex direction="column">
        <Flex
          borderTopRadius="md"
          align="center"
          justify="center"
          w="full"
          h="8rem"
          bg={color}
        >
          <Image
            layout="fixed"
            src={image}
            height="70"
            width="70"
            alt={title}
            placeholder="blur"
          />
        </Flex>
        <Progress
          borderRadius={0}
          colorScheme="purple"
          size="xs"
          value={progress}
        />
        <Flex p={5} direction="column" gap={5}>
          <Heading as="h4" size="sm" fontWeight={600}>
            {title}
          </Heading>
          <Text
            letterSpacing="-0.03rem"
            fontSize="sm"
            color="gray.500"
            fontWeight={400}
            noOfLines={3}
          >
            {description}
          </Text>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardTrajectory
