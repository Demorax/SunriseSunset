import React, {useState} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import Calc from './com/Calc';
import Output from './com/Output';
import './com/main.css'
function App() {

  const getData = (passedData) => {
    setData(passedData)
    calc(passedData);
  }

  const [data, setData] = useState({
    date: "",
    country: "",
    location: {
        lat: 0,
        long: 0
    },
    check: false
});
  const [sunset, setSunset] = useState(0);
  const [sunrise, setSunrise] = useState(0);

function calc(prop) {
  var SunCalc = require('suncalc');
  var times = SunCalc.getTimes(new Date(prop.date), prop.location.lat, prop.location.long);
  var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
  var sunsetStr = times.sunset.getHours() + ':' + times.sunrise.getMinutes();
  setSunset(sunsetStr)
  setSunrise(sunriseStr)
};

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Flex>
            <Box max={'2xl'} h={"770px"} bg={"#E6D5B8"} p={"20px"} className="mainContainer" borderRadius="xl">            
                <Box bg={"#D1A318"} h={"300px"} p={["70px"]} textAlign="center" borderRadius="lg" className='first-box'>
                  <Calc edit={getData} normal={data}/>
                </Box>
                <Box bg={"#1E2428"} mt={"10px"} borderRadius="lg">
                  {sunset !==0 ? <Output time1={sunrise} time2={sunset}/> : null}
                </Box>
            </Box>
            </Flex>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
