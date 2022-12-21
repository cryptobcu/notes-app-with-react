import { Modal, Textarea, Button, ModalFooter, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useToast} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { edit, deleteNote } from "../../redux/notes/notesSlice"

function PopUp( {isOpen, setIsOpen} ) {

  const toast = useToast()
  const dispatch = useDispatch()
  const item = useSelector( state => state.notes.currentNote)
  const [editNote, setEditNote] = useState(item.note)

  const saveSubmit = () => {
    dispatch(edit(editNote))
    setIsOpen(!isOpen)
    toast({
      description: "Note saved.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
  
  const deleteSubmit = () => {
    dispatch(deleteNote())
    setIsOpen(!isOpen)
    toast({
      title: 'Note deleted',
      duration: 3000,
      status: 'warning',
      isClosable: true,
    })
  }
  
  return (
    <Modal
    isOpen={isOpen}
    onClose={ () => setIsOpen(!isOpen)}
    >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Note Details</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
      <Textarea 
      value={editNote}
      onChange={ (e) => setEditNote(e.target.value) }
      fontWeight="300" w="100%" h="160px"
      placeholder='Enter your note here' 
      resize="none"  
      focusBorderColor='none'
      spellCheck="false"
      />
      </ModalBody>
      <ModalFooter>
      <Button onClick={ () => deleteSubmit() } colorScheme='red' mr={3} fontWeight="300">
          Delete
        </Button>
        <Button onClick={ () => saveSubmit() } colorScheme='green' fontWeight="300" isDisabled={ item.note !== editNote && editNote ? false : true }>
          Save
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default PopUp