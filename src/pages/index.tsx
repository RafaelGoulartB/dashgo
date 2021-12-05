import {
  Flex,
  Stack,
  Input,
  Button,
  FormLabel,
  FormControl
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React from 'react'

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
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input name="email"
              type="email"
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>


          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default Home
