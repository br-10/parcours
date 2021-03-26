import React, { useState } from 'react'
import {Link} from 'gatsby'
//import { useTrail, a } from 'react-spring'
//import './flutter.css'
import {Box,Heading,Text,SimpleGrid} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'

const Propaganda=()=>{
return(
    <>
    <Box my="50px" width="100%" bg="tomato">
        <StaticImage
         src="../images/synagogen/3.jpg" alt="Synagoge" 
         layout="fullWidth"
        
        />
    </Box>
    <SimpleGrid columns={[1,2,null, 3]} spacingX="4px" spacingY="20px">
    
    <Box>
     <Heading>Überschrift</Heading>
     <Text fontSize={[20,25]}>
       asd fasd sasdfasdf
       safasfasdfs adf asdf asd fasdf asdf as afs
       </Text>
     <StaticImage
         src="../images/synagogen/4.jpg" alt="Synagoge" 
         layout="fullWidth"
        
        />
    </Box>
    <Box bg="tomato">asd</Box>
    <Box bg="tomato">s</Box>
    <Box bg="tomato">ASDFDSAF</Box>
  </SimpleGrid>
  </>
)
}
export default Propaganda
