import React,{useEffect,useState} from 'react'
import Judenverbote from './verbote.json'
import {Box,Flex,Heading,Text,Button} from '@chakra-ui/react'
import { config,useSpring,animated } from 'react-spring'



const JV = () => {
    const [verbote,setVerbote] = useState([])
    const daten = Judenverbote.daten
    let meinInterval=null
    const [index,setIndex]=useState(0)
    const [jahr,setJahr]=useState(null)
    const [stop,setStop]=useState(false)
   
    useEffect(()=>{
    if(stop){
        clearInterval(meinInterval)
        return
    }
    if(index>daten.length-3) {
        clearInterval(meinInterval)
        setIndex(0)
        return
    }
      meinInterval= setInterval(()=>{
       setIndex(index+1)
      },4200)
      return ()=>clearInterval(meinInterval)
    },[index,stop])

   const Tue=({jahr,monat="",item=""})=> {
    if(jahr) setJahr(jahr)
    //sconst props=useSpring({from:{opacity:0},to:{opacity:1}})
    
       return(
          
       
    <Box  px="3">
         
            { monat && 
           <Text my="4" fontSize={[16,23]} color="red" letterSpacing="0.19rem">{monat}</Text>
       
           }
         {
             item &&
             <Text color="black" lineHeight="1.15" fontSize={[18,19]} >{item}</Text>
       

         } 
       
        </Box> 
       
       )
   }

    return(
        
        <Box p="4">
       
         <Box mt="54px" width="100%">
         <Text >
            Von der Diskriminierung bis zur Ermordung
          
           </Text>
           {/* <span style={{display:"block",textAlign:"center"}}> (Quelle: http://forge.fh-potsdam.de/~SWABD/gesetze.htm &amp; https://www.dhm.de/lemo/jahreschronik)</span> */}
    </Box>
    {index>0 && index<5 &&
     <Text textAlign="left" color="red">Pause/Start: Mausklick auf die Jahreszahl</Text>
    }
   
    <Heading color={stop?"gray.500":"black"} pl="3" mt="30px" 
    onClick={()=>setStop(!stop)} cursor="pointer" >{jahr}</Heading>
     <Button onClick={index>1?()=>setIndex(index-2):null}>&larr;</Button>
     <Text pl="1">{stop?"angehalten":""}</Text>
    {/* <Flex maxWidth="80%" pt="0" justifyContent="space-around">
    <Button color="gray.500" onClick={()=>setStop(true)}>Pause</Button><Button color="gray.500" onClick={()=>setStop(false)}>weiter</Button><Button color="gray.500" onClick={()=>index>0?setIndex(index-1):null}>back</Button>
    </Flex> */}
       

       <Tue  item={daten[index+1].item} monat={daten[index].monat} jahr = {daten[index].jahr} />

           
            
        
     
        </Box>
    
    )
}
export default JV