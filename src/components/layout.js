import React from 'react'
import {Box,Button} from '@chakra-ui/react'
//import {Fonts} from './fonts'
//import {animated,useSpring} from 'react-spring'
import Header from './header'
//import { FaInstagram,FaFacebook } from 'react-icons/fa'
//import LinksBild from './streifen_links.gif'
//import RechtsBild from './streifen_rechts.gif'
import "@fontsource/roboto/500.css" // Weight 500.
//import "@fontsource/roboto/600.css" // Weight 500.
import "@fontsource/roboto/300.css" // Weight 500.
//import "@fontsource/roboto/900-italic.css" // Italic variant.
import {useStaticQuery,graphql, navigate} from 'gatsby'
import {animated, config, useSpring} from 'react-spring'

// const Heading = {
//   // The styles all button have in common
//   baseStyle: {
//     fontWeight: 500,
//     margin:"10px 0",
//     color:"black",
//     fontSize:"40px",
//     lineHeight:'1.1',
   
//   },
  
//   // Two sizes: sm and md
//   sizes: {
//     sm: {
//       fontSize: "16px",
      
//     },
//     md: {
//       fontSize: "20px",
     
      
//     },
//     xl: {
//       fontSize: "22px",
     
      
//     },
//     '1xl': {
//       fontSize: "24px",
     
      
//     },
//     lg: {
//       fontSize: "px",
     
      
//     },
//   },
//   // Two variants: outline and solid
//   variants: {
//     outline: {
//      fontWeight:300,
//     },
//     solid: {
    
//       color: "text",
//     },
//     title: {
//       fontSize: ["1xl","1xl","2xl"],
//       py:1,
      
    
//     },
//     annonce: {
//       fontSize:["lg","xl","1xl"],
//       lineHeight:"1.3",
//       fontWeight:300,
     
//       color: "blue.400"
//     },
//   },
//   // The default size and variant values
//   defaultProps: {
//     fontSize:"2xl",
//     variant: "outline",
  
//   },
// }



// const Text = {
//   // The styles all button have in common
//   baseStyle: {
//     fontWeight: 300,
//     fontSize:"56px",
   
//     color:"black",
//     fontFamily: 'Roboto,sans-serif'
//   },
//   // Two sizes: sm and md
//   sizes: {
//     sm: {
//       fontSize: "16px",
      
//     },
//     md: {
//       fontSize: "18px",
     
      
//     },
//     lg: {
//       fontSize: "20px",
     
      
//     },
//     xl: {
//       fontSize: "24px",
     
      
//     },
//   },
//   // Two variants: outline and solid
//   variants: {
//     outline: {
//       border: "none",
     
//     },
//   zitat:{
//     my:"30px",
//     fontSize:[20,25,30,40],
//     px:5,
//     lineHeight:1.21,
   
//     fontStyle: "italic",
    
//   },
    
   
//   },
//   // The default size and variant values
//   defaultProps: {
  
//     variant: "outline",
//     fontFamily:'Roboto,sans-serif'
//   },
// }

// const Button = {
//   // The styles all button have in common
//   baseStyle: {
//     fontWeight: "500",
//     textTransform: "uppercase",
//     margin:"10px",
//     color:"red",
 
//   },
//   // Two sizes: sm and md
//   sizes: {
//     sm: {
//       fontSize: "12px",
//       padding: "6px",
//     },
//     md: {
//       fontSize: "16px",
//       padding: "24px",
      
//     },
//   },
//   // Two variants: outline and solid
//   variants: {
//     outline: {
//       border: "2px solid",
//       borderColor: "blue.600",
//       fontSize: "11px",
//       padding:"1",
//       margin:"0"
//     },
//     solid: {
//       bg: "gray.400",
//       color: "white",
//       border: "none",
//       p:"0",
//       m:"1",
//       _hover:{
//         backgroundColor:"blue.400"
//       }
//     },
//   },
//   // The default size and variant values
//   defaultProps: {
//     size: "8px",
//     variant: "solid",
   
//   },
// }
// const theme= extendTheme({
//   styles: {
//     global: {
//       ".mdx-prose": {
//         h1: {
//           fontSize: "4xl",
//           mb: "4",
//         },
//         p: {
//           fontSize: "sm",
//           lineHeight: "1.4",
//         },
//       },
//     },
//   },
//     fonts: {
//         heading: "Roboto,sans-serif",
//         body: "Roboto,sans-serif"
//     },
//    components:{
//     Button,
   
//     Heading,
 
//    },
//     textStyles: {
//         // h1: {
//         //   // you can also use responsive styles
//         //   fontSize: ["38px","38px","45px","52px"],
          
//         //   lineHeight: "110%",
//         //   letterSpacing: "-2%",
//         //   color:"blue.400"
//         // },
//         // h2: {
//         //   fontSize: ["18px", "24px","26px", "38px"],
//         //    fontWeight:100,
//         //   lineHeight: "110%",
//         //   letterSpacing: "-1%",
//         //   padding:'30px 0'
//         // },
//         // mestyle: {
//         //   fontSize: ["16px","24px","38px"],
//         //   color: "teal",
//         //   pt:"4",
//         //   pb:"2",
          
//         //   letterSpacing:".09rem"
//         // },
//         p: {
         
//           color: "gray.600"
//         },
//         li:{
//          py:"4",
//          my:"2"
//         }
//         }
// })



const Layout = ({ children }) => {
  const props=useSpring({to:{opacity:1},from:{opacity:0},config:config.slow})
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box margin="auto" maxW="960px" overflow="hidden">
     
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box >
      
    <animated.div style={props}>
      {children}
      </animated.div>  
    
        
        
         <Box>
         © {new Date().getFullYear()},
          {` `}
          <a href="https://kulturnetz-oberes-mittelrheintal.org">K.O.M</a>
         </Box>
         
        </Box>
       

    </Box>
  )
}



export default Layout
