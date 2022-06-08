import { Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'

import CardTrajectory from '../components/card-trajectory'

import Java from '../public/images/java.png'
import React from '../public/images/react.png'
import Vue from '../public/images/vue.png'
import Xml from '../public/images/xml.png'

const HomePage: FC<unknown> = () => {
  return (
    <>
      <Heading size="md" as="h3">
        Inicio
      </Heading>
      <Text color="gray.500">
        Aquí veras el estado de tus trayectorias asignadas por empresas o
        seleccionadas por ti.
      </Text>

      <VStack spacing={3} mt={5}>
        <Heading as="h2" w="full" size="md">
          Trayectorias en progreso (4)
        </Heading>
        <SimpleGrid gap={5} columns={[1, 1, 2, 2, 3]}>
          <CardTrajectory
            image={Java}
            title="Java Web Development"
            description="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
            progress={5}
            maxValue={10}
            currentValue={2}
          />
          <CardTrajectory
            image={React}
            title="React de básico a avanzado"
            description="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
            progress={22}
            maxValue={10}
            currentValue={4}
          />
          <CardTrajectory
            image={Vue}
            title="Vue de básico a avanzado"
            description="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
            maxValue={10}
            currentValue={9}
            progress={99}
          />
          <CardTrajectory
            image={Xml}
            title="XML"
            description="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
            progress={66}
            currentValue={8}
            maxValue={10}
          />
        </SimpleGrid>
      </VStack>
      <VStack spacing={3} mt={10}>
        <Heading as="h2" w="full" size="md">
          Trayectorias por iniciar (2)
        </Heading>
        <SimpleGrid gap={5} columns={[1, 1, 2, 2, 3]} mt={5}>
          <CardTrajectory
            image={Vue}
            title="Vue de básico a avanzado"
            description="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
            maxValue={10}
            currentValue={0}
            progress={0}
          />
          <CardTrajectory
            image={Xml}
            title="XML"
            description="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
            progress={0}
            currentValue={0}
            maxValue={10}
          />
        </SimpleGrid>
      </VStack>
    </>
  )
}

export default HomePage
