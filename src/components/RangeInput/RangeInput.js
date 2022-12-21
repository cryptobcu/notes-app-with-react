import React from 'react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCardSize } from "./../../redux/notes/notesSlice"

function RangeInput() {

    const dispatch = useDispatch()
    const cardSize = useSelector(state => state.notes.cardSize)

    return (
        <>
            <Text fontSize='md' fontWeight="500" mt="8" color="gray.600" p="3" textShadow='0 0 2px #4A5568'>Card Size</Text>
            <Box w="80%"  pb={2} display="flex" gap="2">
                <Box w="40px" color="gray.600" fontSize='xs' textAlign="center" textShadow='0 0 2px #4A5568'>Min</Box>
                <Slider
                    aria-label='slider-ex-6'
                    defaultValue={250}
                    min={220} max={375}
                    value={cardSize}
                    onChange={(val) => dispatch(changeCardSize(val))}>
                    <SliderTrack bg='white'>
                        <SliderFilledTrack bg='gray.400' />
                    </SliderTrack>
                    <SliderThumb bg="gray.600" />
                </Slider>
                <Box w="40px" color="gray.600" fontSize='xs' textAlign="center" textShadow='0 0 2px #4A5568'>Max</Box>
            </Box>
        </>
    )
}

export default RangeInput