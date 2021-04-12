import React,{useEffect,useState} from 'react'
import Judenverbote from './verbote.json'
import {Box,Heading,Text} from '@chakra-ui/react'



const Verbote = () => {
    const [verbote,setVerbote] = useState([])
    const daten = Judenverbote.daten
    useEffect(()=>{
     console.log(verbote)
    },[verbote])
    return(
        <Box border="1px solid green" px="6">
        <Box  width="100%">
            <Heading textAlign="center" fontSize="20" as="h1">Maßnahmen und Gesetze gegen Juden im Nationalsozialistischen Deutschland
               </Heading>
               <span style={{display:"block",textAlign:"center"}}> (Quelle: http://forge.fh-potsdam.de/~SWABD/gesetze.htm)</span>
        </Box>
        <Box py="40px">
          {
         
               daten.map((item,index)=> {
                 if(item.jahr)
                   return <Heading color="black" lineHeight="2.9" letterSpacing="0.19rem">{item.jahr}</Heading>
                else if(item.monat)
                   return <Text my="4" fontSize={[16,23]} color="red" letterSpacing="0.19rem">{item.monat}</Text>
                else if(item.item)
                   return <Text color="black" lineHeight="1.15" fontSize={[18,19]} >{item.item}</Text>
                return null
               })
            }
            
        </Box>  
        </Box>
    )
}
export default Verbote