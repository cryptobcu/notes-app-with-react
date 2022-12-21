import './App.css';
import Aside from './components/Aside';
import Section from './components/Section';
import { ChakraProvider, Flex,Box } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Flex w={["100vw"]}  h="100vh" display="flex" justifyContent="center"  direction={["column","column", "column", "row"]} bg="gray.200" p="0" overflow="hidden">
        <Box w={["100%","100%","100%","30%"]} display="flex" alignItems="center" borderRight="1px solid #A0AEC0">
        <Aside/>
        </Box>
        <Box w={["100%","100%","100%","70%"]} h="100%" overflow="auto">
        <Section/>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
