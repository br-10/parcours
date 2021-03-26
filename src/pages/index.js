

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Heading,Text,Box,bgGradient} from '@chakra-ui/react'
import Flutter from '../components/flutter'

const IndexPage = () => (
 <>
    <SEO title="Home" />
    <Box>
      <Heading>
   <Text

    >
     Zur Geschichte des Landjudentums
     </Text>
     </Heading>
    <Flutter />
    </Box>
  
  </>
)

export default IndexPage
