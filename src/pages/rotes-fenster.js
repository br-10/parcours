import React from 'react'
import Layout from '../components/Layout'
import RFenster from '../components/rfenster'
import {Flex,Box,Text,Heading} from '@chakra-ui/react'


const RotesFenster = () =>{
    return(
        <Box>
          <Heading>
              Das rote Fenster. Von Karl Hartmann
          </Heading>

           <RFenster />

        </Box>
    
    )
}
export default RotesFenster
