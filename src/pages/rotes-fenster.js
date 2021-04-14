import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Box,Heading,Text} from '@chakra-ui/react'


const RotesFenster = () =>{
    return(
        <Box>
          <Heading variant="titel" pl="4">
              Das rote Fenster. Von Karl Hartmann
          </Heading>
<Box width={["320","500"]}><Text>Abraham und Lore Bertel im Waisenhaus</Text></Box>
  <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/bertel.jpg"
  alt="Bild"
  
  
  />
  <Box width={["320","500"]}><Text>Deportationsliste Juli 1942</Text></Box>
     <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/Deportationsliste _Juli_1942.jpg"
  alt="Bild"
  
  
  />  
  <Box width={["320","500"]}><Text>Emma Frenkel geb. Mayer</Text></Box>
   <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/Emma_Frenkel_geb_Mayer.jpg"
  alt="Bild"
  

  /> 
  <Box width={["320","500"]}><Text>Familie Abraham Altenkirchen</Text></Box> 
  <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/Familie_Abraham_Altenkirchen.jpg"
  alt="Bild"

  />      
  <Box width={["320","500"]}><Text>Wilhelm Frenkel</Text></Box> 
  <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/Frenkel_Wilhelm.jpg"
  alt="Bild"
  
  
  />  
  <Box width={["320","500"]}><Text>Gasthof Schwan,1920, Bad Salzig</Text></Box> 
  <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/Gasthof_Schwan_1920_Bad_Salzig.jpg"
  alt="Bild"
  
  
  />   
   <Box width={["320","500"]}><Text>Berta Gerson, geb. Kahn</Text></Box> 
  <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/Gerson_Bertha_geb._Kahn.jpg"
  alt="Bild"
  
  
  />  
   <Box width={["320","500"]}><Text>Gerson Familie - Else Trum, Gustav Gerson, Alfred Gottschalk, Erna Gottschalk 1938</Text></Box> 
  <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/gerson.jpg"
  alt="Bild"
  
  
  />  
   <Box width={["320","500"]}><Text>Rabbi Alfred Gottschalk</Text></Box> 
  <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/Gottschalk_Alfred_Rabbi.jpeg"
  alt="Bild"
  
  
  />  
   <Box width={["320","500"]}><Text>Heinich und Ina Lichtenstein</Text></Box> 
  <StaticImage 
  src="../images/Bilder_Oberwesel_Menschen/Lichtenstein_Heinich_und_Ina.jpg"
  alt="Bild"
  
  
  />  
   
        </Box>

    )
}
export default RotesFenster


