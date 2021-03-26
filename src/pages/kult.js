import React from 'react'
import {Box,Text,Button,Heading,Flex,Center,SimpleGrid} from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'

const Annonce = ()=>{
    return(
        <SimpleGrid  columns={[1,2]} spacing="5">
           <Box>
<Text mt="2" ml="1" variant="annonce">KULTURHAUS OBERWESEL<br/> RATHAUSSTRASSE 23<br/> KELLERGEWÖLBE</Text>
</Box>
<Box width="100" mx="3" display="flex" alignItems="flex-end" flexDirection="column">
    <Button variant="outline"><span style={{fontWeight:100,fontSize:14}}>Bilder</span></Button>
    <Button variant="outline">Audio</Button>
    <Button variant="outline">Video</Button>
</Box>
        </SimpleGrid>
    )
}

const Kult=()=>{
    return(
      
        <>
        <Heading variant="gtitel">
            Der Werner-Kult
        </Heading>
        <Box mt="5">

<StaticImage 
  src="../images/werner/wernerstart.png"
  layout="fixed"
  height="600"
  width="1200"
/>
<span style={{display:'block',paddingBottom:5,marginLeft:5,fontSize:10,marginTop:'10px',paddingTop:0,fontWeight:"100"}}>Bernhard Scherer: Marterung des hl. Werner (Bacharach 1938) © Dagmar Aversano-Schreiber</span>
                    
<Annonce />
</Box>
               <Box>
                <Text  variant="solid">
                
                  <span style={{fontWeight:800}}>WERNER von Oberwesel</span>, ein unbekannter junger Tagelöhner, wurde im Frühjahr 1287 als christlicher Märtyrer in Bacharach bestattet. 
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
                </Box>
              

       </>
    )
}
export default Kult
