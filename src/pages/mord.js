  

import React,{useEffect,useState} from 'react'
import {Flex,Box,Text,Heading} from '@chakra-ui/react'
import mytext from './judtext.json'
import { useSpring, animated} from 'react-spring'
import JV from './jv'
import Audio from '../components/Audio'

//import { animateScroll as scroll } from "react-scroll"
//import './styles.css'
//import Klage from '../data/klage.yaml'

//import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';

//import {FaStop, FaPlay, FaAutoprefixer, FaRegBell} from 'react-icons/fa'




const MText=({alle})=>{
  const sprops = useSpring({from:{opacity:0,fontSize:'29px',color:`red`,
  fontWeight:500},to:{opacity:1,fontSize:'29px',color:`grey`,
  lineHeight:0.5,fontWeight:500},config:{duration:4000}})

  return(
     <animated.div  style={sprops}>{alle}</animated.div>  
  )
}


const  Tarea = () => {
const mtt = mytext.mytext
const mt = mtt.replace(/&nbsp;/g," ")
const pers= mt.split('|')
const [person]=useState(pers)
const [ind,setIndex]=useState(1)
const [alle,setAlle] = useState("")
const [los,setLos] = useState(false)

//console.log(pers.length+ "Ermordet")
useEffect(()=>{
  setLos(true)
  let interval
  if(ind<person.length-1){
   let p = person[ind-1]
   let pArr = p.split(':')

   interval=setInterval(()=>{
     let pA = pArr[0].split(',')
    setAlle(pA[1]+" "+pA[0]+" aus "+pArr[1]+" | "+alle)
    setIndex(ind=>ind+1)
    
  },2000)
  }
  else{
    setIndex(0)
    setAlle("")
  }
  return () => clearInterval(interval);
},[ind,person,alle])


const Pers =({item})=>{
  
 //const props = useSpring({from:{opacity:0,color:`purple`},to:{opacity:1,width:`100vw`,color:`black`},config:{duration:2000}})
  let pArr = item.split(':')
  //const mprops = useSpring({from:{opacity:0,color:`purple`},to:{opacity:1,width:`100vw`,color:`gray`},config:{duration:2000}})
   
  return (
    <Box mt="50px" mb="5">
      <Text color="red" padding="10px 0 ">{ind}</Text>
      <Text m="0" p="0" lineHeight="1.2" variant="titel">{pArr[0]}</Text>
      <Text fontSize={["lg","xl"]}>{pArr[1]}</Text>
  
    </Box>
)}
return (
 
    <Box  px="3"><Heading textAlign="center" variant="titel">Von der Diskriminierung zum Mord</Heading>
  
    <Flex mt="40px" mb="100px" flexDirection={[`column`,`column`,`row`]}>
  
     <Box 
           width={["100%","100%","49%"]}
           padding="0 20px"
           opacity="1"
           marginTop={["40px","40px"]}
           marginBottom={["10px","40px"]}

           order={["1","2","2"]}
         >
           <Audio audio="Reichspogromnacht.mp3" info="Progromnacht: Persönlicher Erfahrungsbericht"/>
  
          <Text pt="10">Ermordung der jüdischen Bevölkerung im Rhein-Hunsrück-Kreis und Umgebung</Text>
          <Text fontSize=".9rem" color="teal.500">unvollständige Liste</Text>
          <Box>
   </Box>
          <Pers item={person[ind-1]}/>
         
            <MText alle={alle} /> 
         
    
 
         
         

          
  </Box> 
  { los && <Box order={["0","null"]} mt={[10,100]} width={["100%","100%","49%"]}>
 
<JV />
  </Box> }
  
  
   
   </Flex>
   </Box>
   

)

}

export default Tarea



