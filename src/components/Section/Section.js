import React from 'react'
import { Box } from '@chakra-ui/react'
import NoteBox from '../NoteBox'
import Search from '../Search'


function Section() {
  return (
    
    <Box bg='gray.200' p="10">
      <Search/>
      <NoteBox/>
    </Box>
  )
}

export default Section