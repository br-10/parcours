import React from 'react'
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,Box,Text,Button,Heading,SimpleGrid} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from '../components/Link'
import SEO from '../components/seo'
import {useSpring,animated,config} from 'react-spring'


const Wernerkult=()=>{
  const props = useSpring({from:{'opacity':0,marginTop:'100px',fontWeight:"100"},to:{'opacity':1,marginTop:'0px',fontWeight:"300"},config:config.stiff})
  const vprops = useSpring({from:{'opacity':0,fontWeight:"100"},to:{'opacity':1,fontWeight:"300"},config:{duration:1000}})
 
  return(

        <Box maxWidth="960">
        <SEO title="Der Wernerkult"
        description="Infos über den Wernerkult"
        />
        <Box  mt="5">
        <Breadcrumb  pl="3">
          <BreadcrumbItem>
            <BreadcrumbLink href="/"><Text variant="bctext">Home</Text></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink ><Text variant="bctext"><Link to="/g-werner">Wernerkult Bilder</Link></Text></BreadcrumbLink>
          </BreadcrumbItem>

        </Breadcrumb>
<animated.div style={vprops}> 
<SimpleGrid  columns={[1,2,3,3]}  >

<Box display={["visible","visible","visible"]}>
<StaticImage
  src="../images/werner/werner_1.jpg"
  alt="Werner Abbildung"
  layout="fullWidth"
  aspectRatio="1"
  />
</Box>

<Box display={["none","block","block"]}>
<StaticImage
  src="../images/werner/werner_2.jpg"
  alt="Werner Abbildung"
    layout="fullWidth"
    aspectRatio="1"
/>

</Box>

<Box  display={["none","none","block","block"]}>
<StaticImage
  src="../images/werner/werner_3.jpg"
  alt="Werner Abbildung"
    layout="fullWidth"
    aspectRatio="1"
/>
</Box>
</SimpleGrid>
</animated.div>
<SimpleGrid p={["10px","20px"]} columns={[2,2]} >
   <Box>
<Text mt="2" ml="1" variant="adresse">KULTURHAUS OBERWESEL<br/> RATHAUSSTRASSE 23<br/> KELLERGEWÖLBE</Text>
</Box>
<Box width="100"  display="flex" alignItems="flex-end" flexDirection="column">
<Link to="/g-werner"><Button variant="outline"> &rarr; Bilder</Button></Link>
<Button variant="outline"> &rarr; Audio</Button>
<Button variant="outline"> &rarr; Video</Button>
</Box>
</SimpleGrid>
</Box>
               <Box width="100%" p={["10px","20px"]}>
               <animated.div style={props}>
               <Heading variant="gtitel">
                   Der Wernerkult
               </Heading>
                <Text  variant="solid">

                  <span style={{fontWeight:500}}>WERNER von Oberwesel</span>, ein unbekannter junger Tagelöhner, wurde im Frühjahr 1287 als christlicher Märtyrer in Bacharach bestattet.
                  Seine übel zugerichtete Leiche war außerhalb des Ortes aufgefunden worden.</Text>
                  <Text variant="solid">
                  Der Pfarrer Heinrich von Crumbach nutzte dies zur Schaffung eines Heiligen, was dem Pfalzgrafen Ludwig II. gelegen kam.
                   Die Juden im benachbarten Oberwesel (in Bacharach gab es keine mehr) wurden beschuldigt,
                   den Jungen umgebracht zu haben. Ein  aufgehetzter Mob massakrierte sie, um den vermeintlichen
                    Ritualmord zu rächen. Die Pogrome weiteten sich auf über zwanzig Orte an Rhein
                    und Mosel sowie auf dem Hunsrück aus. Über dem Sarkophag des »Guten Werner« ließ
                     der Pfalzgraf eine aufwändige Grabkapelle erbauen. Darin fand 1428 ein großer
                     Untersuchungsprozess zur Sicherung des durch Bullen des Papstes Martin V.
                      gefährdeten Kultes statt. Den Prozess hatte bei einem Besuch der päpstliche
                      Legat Kardinal Giordano Orsini veranlasst. Pfalzgraf Ludwig III. und Pastor
                      Winand von Steeg ließen 211 Zeugen befragen. Die Heiligsprechung blieb allerdings aus.
                      </Text>
                      <Text variant="solid">
                      Dennoch zog der Kult in Bacharach bis zu seiner Unterbindung in der Reformation zahlreiche Pilger an.
                      Im katholischen Oberwesel hielt er sich und blühte um 1727 erneut auf. 1742
                      wurde »Sankt Werner« zum Trierer Bistumsheiligen erklärt.
                      </Text>
                 
                      <Text variant="solid">
                      1548 gelangte eine
                      Fingerreliquie nach Besançon. Das bildete den Auftakt für die Verehrung Werners
                      als Schutzpatron der Winzer, hier »St. Vernier« bzw. »St. Verny« genannt, in der Franche-Comté,
                       der Auvergne und in Burgund, sie dauert bis ins 21. Jahrhundert an.
                   
     1621 hoben unter der spanischen
                       Besatzung jesuitische Feldgeistliche in Bacharach die Gebeine und nahmen sie mit in die Spanischen
                        Niederlande, in Lille verliert sich ihre Spur. In zahllosen Heiligenlegenden wurde die
                        Wernergeschichte jahrhundertelang variantenreich tradiert und nährte den christlichen
                        Antijudaismus.
                        </Text>
                        <Text variant="solid">
                        Die Ritualmordlüge war längst mit der Verleumdung der Hostienschändung kombiniert,
                         was die NS-Propaganda, u. a. im »Stürmer«, mehrfach aufgriff.
                         Im Kontext des II. Vatikanischen Konzils erreichte Erwin Iserloh 1963 die
                         Tilgung des Kultes. Ferdinand Pauly unternahm 1964 den Versuch, den Kult zu retten,
                         indem er den Jungen zum Opfer eines Sexualmordes erklärte.
                         </Text>
                         <Text variant="solid" >
                         Die letzte Oberweseler Wernerprozession fand 1971 statt.
                         1997 wurde die Ruine der Bacharacher Wernerkapelle als Mahnmal gestaltet,
                         2008 das Wernerpatrozinium der Oberweseler Hospitalkapelle beendet.
                         Am Mittelrhein finden sich, ebenso wie im Südosten Frankreichs, zahlreiche Darstellungen
                          des angeblichen Märtyrers in Kirchen und Kapellen.

                    </Text>
                    <span>Text von Walter Karbach</span>
                    </animated.div>
                </Box>


       </Box>
    )
}
export default Wernerkult
