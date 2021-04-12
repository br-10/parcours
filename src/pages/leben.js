import React from 'react'

import {Wrap,WrapItem,Box,Text, Heading} from '@chakra-ui/react'
import { StaticImage } from "gatsby-plugin-image"

const Leben = () => {
return(
    <Wrap p="3">
        <WrapItem width="32%"><Box><Heading>Jugend</Heading>
        <StaticImage 
        src="../images/emigration/1.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
        </Box></WrapItem>
        <WrapItem width="62%"><Box ><Heading>Arbeit</Heading>
        <StaticImage 
        src="../images/emigration/2.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
        </Box></WrapItem>
        <WrapItem width="62%"><Box><Heading>Religion</Heading>
        <StaticImage 
        src="../images/emigration/3.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
        </Box></WrapItem>
        <WrapItem width="32%"><Box><Text>j hmkllklk klk l lk k l klk k l kl lkh j hmkllklk klk l lk k l klk k l kl lkh j hmkllklk klk l lk k l klk k l kl lkh j hmkllklk klk l lk k l klk k l kl lkh j hmkllklk klk l lk k l klk k l kl lkh j hmkllklk klk l lk k l klk k l kl lkh j hmkllklk klk l lk k l klk k l kl lkh h</Text></Box></WrapItem>
    </Wrap>
)

}
export default Leben