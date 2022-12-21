import React from 'react'
import { Text, Box, Spacer, Show, Hide, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button } from '@chakra-ui/react'
import Form from "../Form"
import Footer from '../Footer'
import Category from '../Category'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { CloseIcon } from '@chakra-ui/icons'
import RangeInput from '../RangeInput'


function Aside() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <> 
    <Show below='lg'>
      <Text fontSize='3xl' fontWeight="300" color="gray.600"  p="3" textShadow='0 0 2px #4A5568'>My<span style={{ fontWeight: "500" }}>Notes</span></Text>
      <Button variant='outline' colorScheme='blackAlpha' onClick={onOpen}>
        <ChevronDownIcon/>
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.200">
          <DrawerHeader display="flex" justifyContent="end" alignItems="center" >
            <Button variant='outline' colorScheme='blackAlpha' onClick={onClose}>
              <CloseIcon/>
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb="10">
              <Form/>
              <Category/>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>

    <Hide below='lg'>
    <Box w="100%" display="flex" flexDirection='column' justifyContent="center" alignItems="center" bg='gray.200'>
      <Spacer/>
      <Text fontSize='3xl' fontWeight="300" color="gray.600"  p="3" textShadow='0 0 2px #4A5568'>My<span style={{ fontWeight: "500" }}>Notes</span></Text>
      {/* Form Component */}
      <Form />
      {/* Category Component */}
      <Category />
      {/* RangeInput Component */}
      <RangeInput />
      {/* Footer Component */}
      <Footer />
    </Box>
    </Hide>
    </>
  )
}

export default Aside