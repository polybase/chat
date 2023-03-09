import { useEffect, useState } from 'react'
import { Heading, Container, Text, Stack, Button, Box, Input, InputGroup, InputLeftAddon, HStack, Avatar } from '@chakra-ui/react'
import { Auth } from '@polybase/auth'

const auth = new Auth()

export function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const usernames = []

  const login = async () => {
    const authState = await auth.signIn()
    console.log(authState)
  }

  useEffect(() => {
    auth.onAuthUpdate((authState) => {
      setIsLoggedIn(!!authState)
    })
  }, [])


  return (
    <Container p={10}>
      <Stack spacing={8} maxW='30em'>
        <Stack>
          <Heading as='h1'>Chats</Heading>
          <Text>Welcome to the amazing app that chats.</Text>
        </Stack>
        <Stack>
          {isLoggedIn ? (
            <Stack >
              < Heading as='h2' fontSize='2xl'>Usernames</Heading>
              {usernames.length > 0 ? (
                <Stack maxW='30em'>
                  <HStack border='1px solid' borderColor='gray.100' borderRadius='md' p={4}>
                    <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    <Heading fontSize='lg'>@user1</Heading>
                  </HStack>
                </Stack>
              ) : (
                null
              )}
              <Stack>
                <Heading as='h2' fontSize='md'>Create Username</Heading>
                <InputGroup>
                  <InputLeftAddon children='@' />
                  <Input />
                </InputGroup>
                <Button>Create</Button>
              </Stack>
            </Stack>
          ) : (
            <Button onClick={login}>Login with Wallet</Button>
          )}
        </Stack>
        {isLoggedIn && (
          <Stack>
            <Heading as='h2' fontSize='2xl'>Logout</Heading>
            <Button onClick={auth.signIn}>Logout</Button>
          </Stack>
        )}
      </Stack >
    </Container >
  )
}