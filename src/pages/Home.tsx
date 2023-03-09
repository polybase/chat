import { Heading, Container, Text, Stack, Button, Box } from '@chakra-ui/react'


export function Home() {
  return (
    <Container p={10}>
      <Stack spacing={4}>
        <Heading as='h1'>Chat</Heading>
        <Text>Welcome to the amazing app that chat.</Text>
        <Box>
          <Button>Login with Wallet</Button>
        </Box>
      </Stack>
    </Container>
  )
}