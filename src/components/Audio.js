import React from 'react'
import {Box,Text} from '@chakra-ui/react'

const Audio = ({audio,info})=>{
    const af=`./audio/${audio}`
    
    return(<figure>
        <figcaption>
            {info}
        </figcaption>
        <audio controls
        src={af}
      
      
       />
    </figure>)
}
export default Audio
