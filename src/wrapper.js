import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import React from 'react'
import Layout from './components/layout'


const Heading={
    baseStyle: {
        fontFamily:'Roboto, sans-serif',
        lineHeight:'1.4',
        fontSize:"24px",
        mb:2,
        mt:7,
    },
    
    variants:{
        titel:{
            
            fontSize:["md","lg","2xl"]
        },
        gtitel:{
          mt:3,
          letterSpacing:'.09rem',
          textTransform:'uppercase',  
          fontSize:["1xl","2xl"]
      },
    },
  
}
const Button={
  baseStyle: {

  },
  variants:{
    outline: {
      background:'transparent',
      p:2,
      border:'1px solid green',
      fontSize:"sm",
      fontWeight:100,
      
      maxWidth:100,
      textTransform:'uppercase'
    },
  }
}

const Box={
  baseStyle: {
    color:"gray.800",
 
    fontFamily:'Roboto, sans-serif'
},
variants:{
  ojfit:{
    objectFit:"contain",
   
    height:"700px",
    overflow:"scroll-y"
  }
}
}
const Text={
    baseStyle: {
        color:"gray.800",
         fontSize:"xl",
        fontFamily:'Roboto, sans-serif'
    },
    variants:{
      solid:{
        mb:"2",
          fontSize:["md","lg","1xl","1xl"],
          color:"gray.800",
          fontWeight: "300"
      },
      bildtext:{
        mb:"2",
          fontSize:["sm"],
          color:'tail',
      },
      zitat:{
        m:"4",
          fontSize:["1xl","2xl","3xl"],
          color:'gray.900',
      },
      titel:{
        mb:"2",
          fontSize:["lg","2xl","3xl"],
          color:'balack',
      },
  },
}

const theme= extendTheme({
    styles: {
      global: {
        html:{
         backgroundColor:'#f0f0f0',
         fontFamily: 'Roboto,sans-serif',
        },
        body:{
          backgroundColor:'#f0f0f0',
          fontFamily: 'Roboto,sans-serif',
         },
        ".mdx-prose": {
          h1: {
            fontSize: "4xl",
            mb: "4",
          },
          p: {
            fontSize: "sm",
            lineHeight: "1.4",
          },
          
        },
        
      },
    },
      
     components:{
      Text,
      Heading,
      Button,
      Box
     },
    })

export const wrapPageElement = ({ element }) => {
  return (
    
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
     {element}
     </Layout>
    </ChakraProvider>
  
  
  )
}