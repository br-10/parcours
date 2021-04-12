import React from 'react'
import {useSpring} from 'react-spring'
import {SimpleGrid,Flex,Box,Text, Heading} from '@chakra-ui/react'
import { StaticImage } from "gatsby-plugin-image"


const Friedhoefe =( )=>{
    return(
    
     <>
     <Box p="6">
     <Heading variant="gtitel">
      Ein Ort der ewigen Ruhe<br/>
      Jüdische Friedhöfe als letzte Zeugen des Landjudentums
      </Heading>
     </Box>
      
     
 <Box p="3">
   <Box p="3" flex="1">
  <Text variant="solid">
 Die heutigen bekannten Landfriedhöfe befinden sich nach religiösem Brauch 
 außerhalb der Ortschaften. 
 </Text>
 <Text variant="solid">
 Die Lage spiegelt an vielen Orten auch die Tendenz wider, den jüdischen Gemeinden unfruchtbares oder schwer zugängliches Land zur Verfügung zu stellen. Die seit der französischen Zeit auf dem linken Rheinufer (1794-1815) in manchen Städten übliche Praxis, Gräber von Juden auf den kommunalen Friedhöfen durch eine Abgrenzung zu separieren, findet sich im Hunsrückraum nicht.
Friedhöfe werden nach jüdischem Recht für die Ewigkeit angelegt.
</Text>
<Text variant="solid">
 Auch wenn Grabsteine abgeräumt oder Gelände bebaut wird, handelt es sich nach jüdischem Verständnis 
 weiterhin um einen Friedhof. Der Tote soll an diesem Platz mit Leib und Seele in Ewigkeit ruhen, bis der Messias kommt und ihn erlöst. Darin unterscheidet sich die jüdische Bestattungskultur u.a. von der christlichen.
</Text>
<Text variant="solid">
So wurden aus Unkenntnis oder auch bewusst jüdische Friedhöfe überbaut oder gar Grabsteine komplett abgeräumt. 
In vielen Fällen haben Steinmetze und Bildhauer mit behördlicher Genehmigung Grabsteine für andere Zwecke umgearbeitet oder sie sind in Mauern verbaut.
</Text>
<Text variant="solid"
>Vandalismus und antisemitische Schmierereien kommen bis heute immer wieder vor und haben den Grabstätten zum Teil massiv zugesetzt. Hinzu kommen Vernachlässigung, Gedankenlosigkeit, natürliche Verwitterung, Wildschäden, Stürme oder saurer Regen.
</Text>
<Text variant="solid">
Dabei sind die 401 jüdischen Friedhöfe in den meisten Landgemeinden die einzigen noch erhaltenen Zeugnisse der deutsch-jüdischen Kultur in Rheinland-Pfalz. Sie sind religiöse Kultstätten, Erinnerungsorte für Verwandte und Bekannte, aber auch unter staatlichem Schutz stehende Denkmale.
</Text>
<Text variant="solid">
Man spricht bei fast allen ländlichen Friedhöfen von „verwaisten“ Grabstätten, da es keine Angehörigen mehr gibt, die sie pflegen und auch keine jüdischen Gemeinden mehr, die sie nutzen könnten. Die Pflege übernimmt die jeweilige nächstgelegene jüdische Gemeinde oder in deren Auftrag die Zivilgemeinde.
</Text>
</Box>
    <SimpleGrid columns={[1,1,2]} spacing="2">
     <Box >
       <StaticImage 
        src="../images/friedhoefe/1.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
       <Text variant="bildtext">Angehörige sollten die Gräber der Toten jederzeit aufsuchen können. Solche Schilder stehen dem entgegen. Eine neue Vereinbarung mit dem Landesverband der jüdischen Gemeinden in Rheinland-Pfalz fordert, dass Friedhöfe immer betreten werden können (Foto 2017).</Text>
     </Box>
    
     <Box>
       <StaticImage 
        src="../images/friedhoefe/2.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
       <Text variant="bildtext">Die im Wald und an Abhängen gelegenen Friedhöfe leiden besonders unter Schäden, wie hier in Boppard (2018).</Text>
     </Box>
     </SimpleGrid>
     <Box p="3" flex="1">
     <Box >
       <StaticImage 
        src="../images/friedhoefe/3.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
        <Text variant="bildtext"> Marie-Luise Jaske-Steinkamp und Doris Berg lassen sich die Inschrift eines Grabsteines in Sohren von Roni Zusman (Israel) übersetzen (2019).</Text>
    
     </Box>
     <Box>
       <StaticImage 
        src="../images/friedhoefe/4.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
       <Text variant="bildtext">Gelebte deutsch-jüdische Geschichte: Israelische und deutsche Jugendliche säubern den Friedhof in Sohren (2019).</Text>
     </Box>
     <Box>
       <StaticImage 
        src="../images/friedhoefe/5.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
       <Text variant="bildtext">David Hammerschlag (Australien) versucht die zerstörten Fragmente der Grabinschrift seiner Vorfahren auf dem Friedhof in Zeltingen zusammenzusetzen (2011).</Text>
     </Box>
     </Box>
     
 </Box>
 </>
    )
}
export default Friedhoefe