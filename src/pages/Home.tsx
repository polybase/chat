import { useEffect, useState } from 'react'
import { Heading, Container, Text, Stack, Button, Input, InputGroup, InputLeftAddon, HStack, Avatar } from '@chakra-ui/react'

export function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [publicKey, setPublicKey] = useState<string | null>(null)
  const [nftId, setNftId] = useState('')

  const nfts: any = []

  const signIn = async () => {

  }

  const createNFT = async () => {
  }

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
              < Heading as='h2' fontSize='2xl'>NFTS</Heading>
              {nfts?.map(() => {
                return (
                  <Stack maxW='30em'>
                    <HStack border='1px solid' borderColor='gray.100' borderRadius='md' p={4}>
                      <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                      <Heading fontSize='lg'>@id</Heading>
                    </HStack>
                  </Stack>
                )
              })}
              <Stack>
                <Heading as='h2' fontSize='md'>Mint NFT</Heading>
                <InputGroup>
                  <InputLeftAddon children='@' />
                  <Input onChange={(e) => setNftId(e.target.value)} />
                </InputGroup>
                <Button onClick={createNFT}>Create</Button>
              </Stack>
            </Stack>
          ) : (
            <Button onClick={signIn}>Login with Wallet</Button>
          )}
        </Stack>
        {isLoggedIn && (
          <Stack>
            <Heading as='h2' fontSize='2xl'>Logout</Heading>
            <Button>Logout</Button>
          </Stack>
        )}
      </Stack >
    </Container>
  )
}
