import React from 'react'
import {HStack,VStack,Flex,Box,AspectRatio} from '@chakra-ui/react'


const StolpersteinVideos =()=>{
    return(
       
<>
  <HStack>          
  {/* <Box>
  <iframe py="1"   margin="2px"
    title="Rede von Peter Keber"
    src="https://player.vimeo.com/video/532183842"
    allowFullScreen
  />
</Box> */}
<Box  >
  <iframe  margin="2px"
    title="Rede von Karl-Heinz Schleis"
    src="https://player.vimeo.com/video/532194098"
    allowFullScreen
  />
</Box>
</HStack>
<VStack>
<Box>
               
                <p>Bild von Keber</p>
                <p>Bild von Büttner</p>
                <p>Aversano</p>
                <p>Wernerkapelle</p>
                <p>Text von Papst Johannes</p>""
                <p>Abb. Buch TOLERANZ</p>
                <p>Abb Hitlerdenkmal</p>
</Box>
         
</VStack>
     </>
    )
}
export default StolpersteinVideos


