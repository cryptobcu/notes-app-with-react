import React, { useState } from 'react'
import { Textarea, Button, Box, useToast } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux"
import { addNote, changeColor } from "../../redux/notes/notesSlice"


function Form() {

  const toast = useToast()
  const activeColor = useSelector( state => state.notes.activeColor)
  const dispatch = useDispatch()
  const [ note, setNote ] = useState("")


  const formSubmit = (e) => {
    e.preventDefault()
      if ( !note ) { 
        toast({
          title: 'Error',
          description: "Please enter a note.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return      
      }
      dispatch(addNote(note, activeColor))
      setNote("")
      toast({
        title: 'Successful',
        description: "A new note has been added.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
  }

  return (
    <Box bg='white' p="3" rounded='xl' w="80%" boxShadow='lg'>
      <Textarea 
      value={note}
      onChange={ (e) => setNote(e.target.value) }
      fontWeight="300" w="100%" h="160px" bg='white' placeholder='Enter your note here' 
      resize="none" border="0" 
      focusBorderColor='none'
      spellCheck="false"      
      />
        <Box display="flex" justifyContent="space-between" alignItems="center" px="16px" py="12px" fontSize='md' >
          <div>
            <Button onClick={ () => dispatch(changeColor("green.300"))} colorScheme='whatsapp' borderRadius="100%" size='sm' mr="1" p="0">{ activeColor === "green.300" ? <CheckIcon /> : ""}</Button>
            <Button onClick={ () => dispatch(changeColor("blue.300"))} colorScheme='linkedin' borderRadius="100%" size='sm' mr="1" p="0">{ activeColor === "blue.300" ? <CheckIcon /> : ""}</Button>
            <Button onClick={ () => dispatch(changeColor("orange.300"))} colorScheme='yellow' color="white"  borderRadius="100%" size='sm' mr="1" p="0">{ activeColor === "orange.300" ? <CheckIcon /> : ""}</Button>
            <Button onClick={ () => dispatch(changeColor("purple.300"))} colorScheme='purple' borderRadius="100%" size='sm' mr="1" p="0">{ activeColor === "purple.300" ? <CheckIcon /> : ""}</Button>
            <Button onClick={ () => dispatch(changeColor("red.300"))} colorScheme='red' borderRadius="100%" size='sm' p="0">{ activeColor === "red.300" ? <CheckIcon /> : ""}</Button>
          </div>
          <div>
            <Button 
            onClick={ formSubmit }
            colorScheme='gray' 
            fontWeight="500"  
            color="gray.600" 
            >Add</Button>
          </div>
        </Box>            
    </Box>
  )
}

export default Form