import { CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import { FC, useState } from 'react'

import Color from '../public/banner/circulo.png'
import Cafe from '../public/banner/diagrama-de-venn.png'
import Maceta from '../public/banner/funcion.png'

interface stepButtonProps {
  current: number
  limit: number
  onChange: (a: number) => void
}

const StepButtons: FC<stepButtonProps> = ({ current, limit, onChange }) => {
  const points = Array.from(Array(limit), (_, i) => i)

  return (
    <Flex justify="space-between" paddingX={2}>
      <Button
        disabled={current === 0}
        size="xs"
        variant="link"
        onClick={() => onChange(current - 1)}
        fontWeight="400"
      >
        Atras
      </Button>
      <Flex gap={1}>
        {points.map(index => (
          <Box
            key={index}
            bg={index === current ? 'secondary' : 'gray.600'}
            w="5px"
            h="5px"
            borderRadius="full"
          />
        ))}
      </Flex>
      <Button
        disabled={current === limit - 1}
        size="xs"
        variant="link"
        fontWeight="400"
        onClick={() => onChange(current + 1)}
      >
        Siguiente
      </Button>
    </Flex>
  )
}

const items = [
  {
    title: 'Crea conocimiento',
    description: 'Mejora a travez de competencias nuevas habilidades',
    image: Maceta
  },
  {
    title: 'Te ayudamos a formar parte de la elección',
    description: 'Mejora tus habilidades constantemente',
    image: Color
  },
  {
    title: 'Aprende tecnicas nuevas',
    description: 'Te ayudamos con las mejores practicas funcionales',
    image: Cafe
  }
]

interface bannerItemProps {
  title: string
  description: string
  image: StaticImageData
}

const BannerItem: FC<bannerItemProps> = props => (
  <Flex gap={5} h="full" w="full" align="center" px={5}>
    <Box>
      <Image
        src={props.image}
        layout="fixed"
        height="35"
        width="35"
        alt="banner-image"
      />
    </Box>
    <Flex gap={1} direction="column">
      <Heading as="h3" size="sm">
        {props.title}
      </Heading>
      <Text fontSize="xs">{props.description}</Text>
      <Box mt={2}>
        <Button size="xs" variant="link">
          Ver detalle
        </Button>
      </Box>
    </Flex>
  </Flex>
)

const Banner: FC<unknown> = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [itemIndex, setItemIndex] = useState<number>(0)

  const color = useColorModeValue('gray.100', 'dark')

  return (
    <Flex display={visible ? 'flex' : 'none'} direction="column" gap={2}>
      <Box bg={color} position="relative" w="full" borderRadius="lg" h="10rem">
        {items.map((item, key) => (
          <Box
            key={key}
            display={key === itemIndex ? 'block' : 'none'}
            h="full"
          >
            <BannerItem
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </Box>
        ))}
        <IconButton
          onClick={() => setVisible(false)}
          variant="ghost"
          size="xs"
          position="absolute"
          right={3}
          top={3}
          icon={<CloseIcon />}
        />
      </Box>
      <StepButtons
        current={itemIndex}
        limit={items.length}
        onChange={(v: number) => setItemIndex(v)}
      />
    </Flex>
  )
}

export default Banner
