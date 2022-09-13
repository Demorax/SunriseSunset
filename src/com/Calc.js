import React, {useState} from 'react'
import {
    Button,
    Input,
    Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Flex
  } from '@chakra-ui/react';
 
function Test(props) {

    const [data, setData] = useState({
        date: "",
        country: "",
    });

    const [error, setError] = useState(false)

    function submit() {
        var geos = require('geos-major')
        var geo = geos.country(data.country);
        if(geo){
            props.edit({...data, location: {lat: geo.latitude, long: geo.longitude}, check: true})
            setError(true)
        } else {
            setError(false)
        }
    }

    function handle(e) {
        e.preventDefault()
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
  return (
    <form>
        <Input onChange={(e) => handle(e)} id="date" value={data.date} placeholder="Select Date" size="md" type="date" name='date' color={"#1E2428"}  
        variant='outline' isInvalid errorBorderColor='#1E2428' focusBorderColor='crimson'></Input>
        <Input onChange={(e) => handle(e)} id="country" value={data.country} placeholder="Country Code" name='country' type={"text"}  
        variant='outline' isInvalid errorBorderColor='#1E2428' mt={"2"} focusBorderColor='crimson' _placeholder={{ opacity: 0.4, color: '#1E2428' }}></Input>
        <Button onClick={submit} bg='#1E2428' mt={"2"}>Calculate</Button>
        {error 
        ? 
        <Alert status='success' textAlign={"center"} size="xs">
            <AlertIcon />
            <AlertTitle color={"#1E2428"}>Data submitted successfully</AlertTitle>
            <AlertDescription color={"#1E2428"}>Fire it on!</AlertDescription>
        </Alert>
        : 
        <Alert status='error' textAlign={"center"}>
            <AlertIcon />
            <AlertTitle color={"#1E2428"}>Error in input!</AlertTitle>
            <AlertDescription color={"#1E2428"}>Country Code(CZ, DE)</AlertDescription>

        </Alert>
    }
    </form>
    
  )
}

export default Test