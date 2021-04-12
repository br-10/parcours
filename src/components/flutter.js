import React, { useState } from 'react'
import Link from './Link'
import { useTrail, a } from 'react-spring'
import './flutter.css'
import {Box,Text} from '@chakra-ui/react'

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 30,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 0, height: 0 },
  })
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={index}
            className="trails-text"
            style={{ ...rest, transform: x.to((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div ><span style={{color:"red"}}>{items[index]}</span></a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

function Flutter() {
  const [open, set] = useState(true)
  return (
      <Box mt="30" mb="300"  ml="0">
    <Trail open={open} >
    <Box  p="0" m="0" width="100%"><Link to="/rotes-fenster"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]} >Rotes Fenster Wernerkapelle</Text></Link></Box>  
   
      <Box p="0" m="0" width="100%"><Link to="/"><Text fontWeight="500" fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Propaganda der NS-Zeit</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Jüdische Bürger vor 1933</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/p3"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Enteignung jüdischer Bürger</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/wernerkult"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Der Wernerkult</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/page-2"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Tradition + Architektur</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/p1"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>künstlerische Aufarbeitung Friedhelm Fries</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/p3"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Zeitzeugen des Holocaust</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/p4"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Stolpersteine</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/page-2"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Hadamar – Euthanasie des NS-Regimes</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/friedhoefe"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Friedhöfe</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/emigration"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>Emigration</Text></Link></Box>
      <Box p="0" m="0" width="100%"><Link to="/p4"><Text fontWeight="500" p="0" m="0" fontSize={[18,23,40]}>künstlerische Aufarbeitung Michael Apitz</Text></Link></Box>
     
    </Trail>
    </Box>
  )
}

export default Flutter