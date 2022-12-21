import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import styles from "./NoteBox.module.css"
import { onClickNote } from "../../redux/notes/notesSlice"
import PopUp from '../PopUp'

function NoteBox( ) {

    const [isOpen, setIsOpen] = useState(false)
    const category = useSelector(state => state.notes.activeCategory)
    const notes = useSelector(state => state.notes.notes)
    const filtered = useSelector(state => state.notes.filtered)
    let cardSize = useSelector(state => state.notes.cardSize)

    let filteredNotes
    
    if ( category === "") {
        filteredNotes = notes.filter(item => item.note.toLowerCase().includes(filtered.toLowerCase()))  
    } else if (category && filtered) {
        filteredNotes = notes.filter( (item) => item.color === category).filter(item => item.note.toLowerCase().includes(filtered.toLowerCase()))
    } else {
        filteredNotes = notes.filter( (item) => item.color === category)
    }

    const dispatch = useDispatch()
    const noteSubmit = (item) => {
        dispatch(onClickNote(item)) 
        setIsOpen(true)
    }

    return (
        <>
        <Box display="flex" justifyContent="center" flexWrap="wrap" flexDirection="row" pt="5">
            {filteredNotes.map(item =>
                    <Box key={item.id}
                        w={`${cardSize}px`} h={`${cardSize}px`} m="5" p="6" bg={item.color}
                        className={styles.box}
                        borderRadius="16"
                        rounded='xl'
                        boxShadow='xl'
                        overflow="hidden"
                        textOverflow="ellipsis"
                        onClick={() => noteSubmit(item)}
                        display="flex"
                        justifyContent="center" 
                        alignItems="center"
                        textAlign="center"
                    >
                        <Text className={styles.noteFont} color="gray.700" textShadow='0 0 1px #4A5568' p={1} >{item.note}</Text>
                    </Box>
            )
            }
        </Box>
        { isOpen &&  <PopUp isOpen={isOpen} setIsOpen={setIsOpen} /> }
        </>
    )
}

export default NoteBox