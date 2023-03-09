// import {  } from '@polybase/client'
import React, { useEffect } from 'react'
import {
  Box, Divider, Flex, Heading, Stack, Text, Button,
  useDisclosure, HStack,
  Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent,
  DrawerHeader, DrawerBody, Spacer, Avatar, InputGroup, Input, InputRightElement,
} from '@chakra-ui/react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function Chat() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { username, id } = useParams()
  const navigate = useNavigate()

  // Go back to home if no username
  useEffect(() => {
    if (username) return
    navigate('/')
  }, [navigate, username])

  return (
    <>
      <Flex height='100%'>

        {/* List of chats */}
        <Box width='15em' borderRight='1px solid' borderColor='gray.100' height='100%'>
          <Stack p={2}>
            <Stack divider={<Divider />}>
              <Link to='/chats/1'>
                <Box p={2} _hover={{ bg: 'gray.100' }} borderRadius='md'>
                  <Heading fontSize='lg'>Group 1</Heading>
                  <Text color='gray.500' fontSize='sm'>Last message</Text>
                </Box>
              </Link>
              <Link to='/chats/2'>
                <Box p={2} _hover={{ bg: 'gray.100' }} borderRadius='md'>
                  <Heading fontSize='lg'>Group 2</Heading>
                  <Text color='gray.500' fontSize='sm'>Last message</Text>
                </Box>
              </Link>
            </Stack>
            <Divider />
          </Stack>
        </Box>

        {/* Main chat area */}
        <Flex height='100%' flex='1 1 auto' minW='0' flexDirection='column'>

          {/* Chat header */}
          <Flex borderBottom='1px solid' borderColor='gray.100' p={2}>
            <Flex alignItems='center'>
              <Heading fontSize='xl'>Group 1</Heading>
            </Flex>
            <Spacer />
            <Box>
              <Button size='sm' onClick={onOpen}>Members</Button>
            </Box>
          </Flex>

          {/* Chat messages */}
          <Box flex='1 1 auto' height='100%' minH='0' overflowY='auto' bg='rgba(237, 242, 246, 0.33)'>
            <Stack p={4}>
              <Flex>
                <Box justifyContent='left' maxW='50%' bg='green.500' borderRadius='lg' padding='lg' p={4} fontWeight='bold' color='white' boxShadow='sm'>
                  Message from them
                </Box>
              </Flex>
              <Flex justifyContent='right'>
                <Box maxW='50%' bg='blue.500' borderRadius='lg' padding='lg' p={4} fontWeight='bold' color='white' boxShadow='sm'>
                  Message from me
                </Box>
              </Flex>
            </Stack>
          </Box>

          {/* Chat input (to write new messages) */}
          <Box borderTop='1px solid' borderColor='gray.100' position='relative' boxShadow='sm' color='#fff'>
            <Flex>
              <textarea placeholder='Write a message' style={{ outline: 'none', padding: 5, resize: 'none', color: '#333', width: '100%', flex: '1 1 auto' }} />
              <Flex alignItems='center' px={2}>
                <Button colorScheme='blue' bg='blue.500'>Send</Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      {/* Chat detail (members/invite) */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chat Members</DrawerHeader>

          <DrawerBody>
            <Stack>
              <Stack>
                <HStack border='1px solid' borderColor='gray.100' borderRadius='md' p={4}>
                  <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                  <Heading fontSize='lg'>@user1</Heading>
                </HStack>
              </Stack>
              <Stack>
                <InputGroup size='md'>
                  <Input
                    pr='4em'
                    type='text'
                    placeholder='Enter username'
                  />
                  <InputRightElement width='4em'>
                    <Button h='1.75rem' size='sm'>
                      Add
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Stack>
            </Stack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>

  )
}
