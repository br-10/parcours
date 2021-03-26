import React, { useState } from 'react'
import {Link} from 'gatsby'
//import { useTrail, a } from 'react-spring'
//import './flutter.css'
import {Box,SimpleGrid,Text} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'

const Rfenster=()=>{
return(
    <>
    <Box my="50px" width="100%" bg="tomato">
        <StaticImage
         src="../images/synagogen/3.jpg" alt="Synagoge" 
         layout="fullWidth"
         height="600"
       
        />
    </Box>
    <Text variant="solid">dfs dasf asd as sf</Text>
    <SimpleGrid minChildWidth="320px" spacing="4px">
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
</SimpleGrid>

  </>
)
}
export default Rfenster
