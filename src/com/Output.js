import React, {useState} from 'react'
import {
    Text,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    useColorModeValue,
    Box,
    Center,
    Circle,
  } from '@chakra-ui/react';

import { RiSunFill, RiMoonFill } from 'react-icons/ri';    

function Output(props) {

    const colors = useColorModeValue(
        ['grey', 'teal.50',],
        ['', ''],
      )
      const [tabIndex, setTabIndex] = useState(0)
      const bg = colors[tabIndex]
  return (
        <Tabs onChange={(index) => {setTabIndex(index)}} bg={bg} isFitted variant='soft-rounded'>
            <TabList>
                <Tab _selected={{ color: '#1A202C', bg: '#F5BA74' }} fontSize="xl" borderRadius="none">Sunrise</Tab>
                <Tab _selected={{ color: '#1A202C', bg: '#F5BA74' }} fontSize="xl" borderRadius="none">Sunset</Tab>
            </TabList>
        <TabPanels p='2rem'>
                <TabPanel className="sunrise">
                    <Center>
                        <Circle bg={"radial-gradient(circle, rgba(188,41,9,1) 12%, rgba(186,109,9,1) 39%, rgba(113,168,238,1) 57%, rgba(48,114,235,1) 79%);"} size="200px">
                            <RiSunFill size='80px' color='#58151A'/>
                        </Circle>
                    </Center>
                    <Box textAlign={"center"} mt={"10"} borderRadius="lg" bg={"#F5BA74"}>  
                        <Text color={"#1A202C"}>Sunrise is at {props.time1}</Text>
                    </Box>  
                </TabPanel>
                <TabPanel className="sunset">
                <Center>
                        <Circle bg={"radial-gradient(circle, rgba(221,114,60,1) 12%, rgba(252,112,1,1) 39%, rgba(220,182,151,1) 57%, rgba(155,165,174,1) 79%);"} size="200px">
                            <RiMoonFill size='80px' color='#1A365D'/>
                        </Circle>
                    </Center>
                    <Box textAlign={"center"} mt={"10"} borderRadius="lg" bg={"#F5BA74"}>  
                        <Text color={"#1A202C"}>Sunset is at {props.time2}</Text>
                    </Box>  
                </TabPanel>
        </TabPanels>
        </Tabs>
  )
}

export default Output