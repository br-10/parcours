import React, { useState, useCallback, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import {Box,Heading,Text,Button} from '@chakra-ui/react'
import Layout from '../components/layout'
import Syn from '../data/synagoge.json'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'



const Galerie = ({data})=>{
const [index,setIndex]= useState(0)
const [bild,setBild]=useState(false)
const daten=Syn.daten
const bilder = data.synagog
console.log(bilder)
//console.log(bilder.nodes[index].childImageSharp.gatsbyImageData)
function Bild ({image}){
    const props= useSpring({from:{marginLeft:'-10px'},to:{marginLeft:'0px'}})

    //const b= bilder.nodes[index].childImageSharp.gatsbyImageData 
   
    return(
      
          
           <GatsbyImage image={image} layout="fullWidth" alt="b" />
      
    
         
    )
}

useEffect(()=>{

  setBild(bilder.nodes)
 
    
  

},[bild,index])

return(
<>
       
   <Box>
      <Heading variant="titel" pl="3">dfasdfd</Heading>

      <Box  px="2" mb="6" >
    
     {bild &&<>
     <Box m="2" ml="8" mt="4" position="relative" zIndex="44"  maxHeight="660px" overflow="hidden" objectFit="cover">
        <Bild image={bild[index].childImageSharp.gatsbyImageData} layout="fixed" />
     
     </Box>
    
       
       </>
     } 
     <Box my="2"  p="0" position="fixed " zIndex="300" top="50%" display="flex" 
     justifyContent="space-between" zIndex="200" width={["100%","90%","70%"]}>
     <Button p="1" onClick={()=>index<bilder.nodes.length-1?setIndex(index+1):null}>&rarr;</Button> {"  "} 
     <Button p="1" mr="1" onClick={()=>index>0?setIndex(index-1):null}>&larr;</Button>{"  "}
       
     </Box>
     
   
     </Box>
     <Box><Text ml="3">{daten[index].titel}</Text></Box>
     
     </Box>
    </>
)
}

     
   
export const myNQuery=graphql`
query {
synagog:allFile(
    filter: { relativePath: {regex: "/synagogen/"}}
  ) {
    nodes {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}
`

  export default Galerie