import React from 'react'
import { Box, Select, Text } from '@chakra-ui/react'
import { category } from "../../redux/notes/notesSlice"
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"


function Category() {

  const dispatch = useDispatch()
  const activeCategory = useSelector(state => state.notes.activeCategory)


  return (
    <>
    <Text fontSize='md' fontWeight="500" mt="8" color="gray.600"  p="3" textShadow='0 0 2px #4A5568'>Categories</Text>
    <Box bg='white' rounded='xl' w="80%" h="40px" mb="4" boxShadow='lg'>
      <Select fontWeight="300" color='gray.500' value={activeCategory} placeholder='All Notes' border="none" focusBorderColor='none' onChange={(e) => dispatch(category(e.target.value))}>
        <option value='green.300'>Green Notes</option>
        <option value='blue.300'>Blue Notes</option>
        <option value='orange.300'>Orange Notes</option>
        <option value='purple.300'>Purple Notes</option>
        <option value='red.300'>Red Notes</option>
      </Select>
    </Box>
    </>
  )
}

export default Category