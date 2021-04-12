import React from 'react'
import {Text,Heading,Flex,Box} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'

const Emigration = () => {
    return(
        <Flex p="3" flexDirection={["column","colum","row"]}>
            <Box mt={["50","50","250"]} mr="7">
                <Heading>Auswandern oder bleiben?</Heading>
               
  
              </Box>  

<Box >
<Text variant="zitat">

„In diesem Dorf haben wir nichts zu befürchten“
(Gertrude Joseph, Laufersweiler)
</Text>
<Text variant="solid">
Um 1900 leben etwa 1.000 Juden im heutigen Rhein-Hunsrück-Kreis. Bereits 1925 ist ihre Zahl auf nur noch 673 geschrumpft.
Bereits zu Beginn des Jahrhunderts wandern viele in die nahen Großstädte ab. Andere wagen den Schritt ins Ausland.
</Text>
<StaticImage 
        src="../images/emigration/1.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
    <Text variant="bildtext">
Eine Annonce aus dem Kirchberger Anzeiger verweist auf die Notlage der Verfolgten, die ihren Besitz weit unter Wert verkaufen.
</Text>   
<Text variant="solid">Mit Beginn der nationalsozialistischen Repression wächst die Suche nach einer sicheren Zufluchtsstätte.
</Text>
<Text variant="solid">
Durch die enge Einbindung in das soziale und wirtschaftliche Leben auf dem Lande ziehen 
  viele eine Auswanderung jedoch erst spät in Betracht. Unvorstellbar, dass sich Freunde,
   Nachbarn, Geschäftspartner gegen sie wenden könnten. 
</Text>
<StaticImage 
        src="../images/emigration/2.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
<Text variant="bildtext">
    Simon Grünewald erhält ein Visum für die einmalige Einreise nach Frankreich: accompagné son fi ls – zur Begleitung seines Sohnes, der von hier aus nach Südamerika auswandert.
</Text>

<Text variant="solid">
Die Reichspogromnacht wird zur Zäsur, in deren Folge sich auch jene, die sich in Sicherheit wähnten, zum Handeln gezwungen sehen.
</Text>
<Text variant="solid">
Im Fall der Stadt Kirchberg hatten bis 1939 alle jüdischen Bewohner ihr einstiges Zuhause verlassen. Sie zogen in die Großstädte zu Verwandten, suchten die Anonymität und den Rückhalt einer jüdischen Gemeinde. Wem es gelang ein Visum zu erhalten, ging in das benachbarte Ausland. Doch mit Ausbruch des Krieges wurden sie auch dort von der nationalsozialistischen Verfolgung eingeholt.
Zum schnellen Handeln gedrängt, rissen Auswanderungspläne viele Kernfamilien auseinander. Eltern versuchten zunächst ihre Kinder in Sicherheit zu bringen, in der Hoffnung, ihnen bald folgen zu können. Briefe zeugen von den Versuchen, Normalität
vorzugeben, aber auch vom verzweifelten Warten auf die geringsten Lebenszeichen.
</Text>
<StaticImage 
        src="../images/emigration/3.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
<Text variant="bildtext">
Gertrud Frank aus Laufersweiler und ihrem Ehemann Philipp Kohn aus Bayern gelingt 1940 die Flucht nach Shanghai, eine der letzten Zufl uchtsstätten, die kein Visum verlangt.

</Text>
<Text variant="solid">
Augenzeugenberichte erzählen vom Zusammenbruch des Simon Grünewald aus Rheinböllen auf offener Straße, nachdem dieser den letzten seiner drei Söhne nach Südamerika verabschiedet hatte.
Während Auswanderung eine Freiwilligkeit voraussetzt, wird das Verlassen der Heimat für die Juden in Deutschland mehr und mehr alternativlos. 
Mit Beginn der nationalsozialistischen Repression wächst die Suche nach einer sicheren Zufluchtsstätte.
</Text>
<Text variant="solid">
Doch mit den steigenden Flüchtlingszahlen nimmt die Aufnahmebereitschaft der Zielländer ab. Das Ausreiseverbot vom 23.10.1941 setzt der legalen Auswanderung ein entschiedenes Ende.
Nur in wenigen Einzelfällen kehrten Überlebende aus dem Hunsrück dauerhaft nach Deutschland zurück. 
</Text>
<StaticImage 
        src="../images/emigration/4.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
<Text variant="bildtext">
Nach der Emigration 1936 kehrt Harry Heymann 1944 mit der US-Army als „Prisoner of War Interrogator“ – zur Befragung Kriegsgefangener – in das besiegte Deutschland zurück.

</Text>
<Text variant="solid">
Soweit bekannt, begannen sie und ihre frühzeitig geflohenen Angehörigen ein neues Leben in Israel, USA, Australien, Südafrika, Schweiz, England,
Niederlande, Frankreich, Argentinien, Ecuador und Bolivien.
</Text>
<StaticImage 
        src="../images/emigration/5.jpg"
        alt="Jüdischer Friedhof"
        placeholder="blurred"
        layout="constrained"
       
       />
   
   <Text variant="bildtext">
1939 setzt der 17-jährige Leo Grünewald mit dem Dampfer „Conte Grande“ nach Südamerika über. Er ist der letzte von drei Söhnen, der die Eltern Ida und Simon
in Rheinböllen zurücklassen muss.
</Text>


            
</Box>
</Flex>
    )

}

export default Emigration