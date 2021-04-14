import React,{useEffect,useState} from 'react'
import Judenverbote from './verbote.json'
import {StaticImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text,Button,Tooltip} from '@chakra-ui/react'
//import { config,useSpring,animated } from 'react-spring'



const JV = () => {
    const [verbote,setVerbote] = useState([])
    const daten = Judenverbote.daten
    let meinInterval=null
    const [index,setIndex]=useState(0)
    const [jahr,setJahr]=useState(null)
    const [stop,setStop]=useState(false)
   
    useEffect(()=>{
    if(daten[index].jahr) {
        setJahr(daten[index].jahr)   
        }
        
       
    
       
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

   

    return(
        
        <Box 
         p="6"
         width="100%"
         backgroundImage={index%9===0?"url(./images/heinzjosephkz.jpg)":"url(./images/heinzjoseph.jpg)"}
         backgroundSize="contain"
         backgroundRepeat="no-repeat"

       >
        <Text fontSize=".9rem" color="teal.700">{index%9===0?"Heinz Joseph im KZ":"Heinz Joseph, Foto von 1940"}</Text>
         <Box mt="54px" width="100%">
         <Text >
            Von der Diskriminierung zum Mord
           </Text>
           <Text fontSize=".9rem" color="teal.700">unvollständige Liste von Gesetzen und behördlichen Verfügungen</Text>
           {/* <span style={{display:"block",textAlign:"center"}}> (Quelle: http://forge.fh-potsdam.de/~SWABD/gesetze.htm &amp; https://www.dhm.de/lemo/jahreschronik)</span> */}
    </Box>
    {index>0 && index<5 &&
     <Text textAlign="left" color="red">Pause/Start: Mausklick auf die Jahreszahl</Text>
    }
   <Tooltip label="stop/weiter per MouseClick" aria-label="Tooltip">
    <Heading color={stop?"gray.500":"black"} pl="3" mt="30px" 
    onClick={()=>setStop(!stop)} cursor="pointer" >{jahr}</Heading>
    </Tooltip>
     <Button onClick={index>1?()=>setIndex(index-2):null}><Tooltip label="zurück" aria-label="Tooltipp">&larr;</Tooltip></Button>
     <Text pl="1">{stop?"angehalten":""}</Text>
    {/* <Flex maxWidth="80%" pt="0" justifyContent="space-around">
    <Button color="gray.500" onClick={()=>setStop(true)}>Pause</Button><Button color="gray.500" onClick={()=>setStop(false)}>weiter</Button><Button color="gray.500" onClick={()=>index>0?setIndex(index-1):null}>back</Button>
    </Flex> */}
       

       {/* <Tue  item={daten[index+1].item} monat={daten[index].monat} jahr = {daten[index].jahr} /> */}

       <Box minHeight={index%9===0?450:200}  px="3">
         
       
    
        
         { daten[index].monat && 
        <Text my="4" fontSize={[16,23]} color="red" letterSpacing="0.19rem">{daten[index].monat}</Text>
    
        }
      {
          daten[index+1].item &&
          <Text padding="10" width="100%" backgroundColor="rgba(255,255,255,.8)" color="black" lineHeight="1.15" fontSize={[18,19]} >{daten[index+1].item}</Text>
    

      } 
    
     </Box> 

          {/* <Box >
         
           <StaticImage 
          
          src="../images/mord/heinzjosephkz.jpg" alt="Heinz Joseph in KZ-Uniform"
          
          />
           </Box> 
           <Box >
         
         <img 
        
        src="./images/heinzjosephkz.jpg" alt="Heinz Joseph in KZ-Uniform"
        
        />
         </Box>  */}
        
     
        </Box>
    
    )
}
export default JV