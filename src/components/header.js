import React from "react"
import {Box} from '@chakra-ui/react'

import Link from "./Link"
import {useSpring, animated} from 'react-spring'




const Header = ({ siteTitle,location}) => {
  const props=useSpring({from:{fontSize:'0px',letterSpacing:'0rem',fontWeight:100},to:{paddingLeft:5,fontSize:'50px',letterSpacing:'0.19rem',fontWeight:900},config:{duration:1000}})
 
  
  return(
  
    <Box as="header"
      pl="3"
      pt="2"
      display="flex"
      justifyContent={typeof Window && window.location.pathname==="/"?'left':'center'}
      alignItems="center"
      width="98%"
      maxWidth="960px"
      margin="auto"
      
      
      
    >
    
   {/* {typeof Window && window.location.pathname!=="/" && <Box position="fixed" left={["95vw","95vw"]} zIndex="30" top={["95vh","95vh","68vh"]}>
        <Button variant="outline" onClick={()=>navigate("/")}>
          back
        </Button>
      </Box>} */}
       
       
     
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <div style={{
        position:'relative',
        zIndex:120,
        mt:-4

      }}>
      <Link to="/">
      
        <animated.h1 style={props}>Verluste</animated.h1></Link>
      </div>
    </Box>

)}


export default Header
