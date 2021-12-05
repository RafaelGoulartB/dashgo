import {
  Flex,
  Stack,
  Button,
  FormLabel,
  FormControl
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'
import Input from '../components/Form/Input'

const Home: NextPage = () => {
  const onSubmit = (e: React.FormEvent<any>) => {
    e.preventDefault()
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="360"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={onSubmit}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="Email"
            type="email"
          />
          <Input
            name="password"
            label="Senha"
            type="password"
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
