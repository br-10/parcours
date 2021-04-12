

import * as React from "react"
import SEO from "../components/seo"
import {Box} from '@chakra-ui/react'
import Flutter from '../components/flutter'

const IndexPage = () => (
 <>
    <SEO title="Home" />
    <Box p="5">
    <Flutter />
    </Box>

  </>
)

export default IndexPage
