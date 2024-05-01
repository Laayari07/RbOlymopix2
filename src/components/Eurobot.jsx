import FullScreenSection from "./FullScreenSection.jsx";
import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

const Eurobot = () => {
  const windowWidth = window.innerWidth;

  const commonStyles = {
    id: "eurobot-section",

  };

  if (windowWidth > 750) {
    return (
      <FullScreenSection height={["300px", "100vh"] } {...commonStyles}>
        <VStack spacing={8} align="center">
          <Heading color={'var(--title)'} as="h1" size={["lg", "xl"]}>
          Qualifications Eurobot tunisiennes
          </Heading>
          <Text
          id="landing-text"
          margin="5% 4% 3% 4%"
          style={{ fontFamily: 'cursive', whiteSpace: 'pre-wrap' }}
          fontSize={["sm", "xl"]}
        >            Qualifications Tunisiennes du concours international EUROBOT. EUROBOT est une rencontre de robotique amateur, ouverte aux jeunes réunis au sein d’un club, d’un groupe d’amis ou d’un cadre scolaire. Il a pour objectif de permettre aux jeunes d’être les acteurs de leur apprentissage et de mettre en pratique leurs savoirs, savoir-faire et savoir être, en participant à un événement ludique et convivial. Le challenge technique Senior consiste à construire un robot autonome ainsi qu’un robot secondaire autonome dont la fabrication est facultative. Le challenge technique Junior consiste à construire un robot filoguidé ou télécommandé ainsi qu’un robot secondaire autonome dont la fabrication est facultative.
          </Text>
          <Text
          id="landing-text"
          margin="5% 4% 3% 4%"
          style={{ fontFamily: 'cursive', whiteSpace: 'pre-wrap' }}
          fontSize={["sm", "xl"]}
        >            Country: TUNISIA <br />
                     Website: <a href="http://www.atr.tn/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>http://www.atr.tn/</a>  <br />
                     Facebook Page: <a href="https://www.facebook.com/atr.tunisie" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>https://www.facebook.com/atr.tunisie</a>
                          <br />
                     Location: INSAT - National Institute of Applied Science and Technology <br />
                     <a href='https://www.eurobot.org'>
              <Button colorScheme="blackAlpha" variant="solid" marginLeft={300} >View More</Button>
            </a>
          </Text>

        </VStack>
      </FullScreenSection>
    );
  } else {
    return (
      <FullScreenSection height={["750px", "100vh"]}  {...commonStyles}>
        <VStack spacing={8} align="center">
          <Heading color={'var(--title)'} as="h1" size={["xl", "xl"]}>
            Tunisian Eurobot Qualifications
          </Heading>
          <Text
          id="landing-text"
          margin="5% 4% 3% 4%"
          style={{ fontFamily: 'cursive', whiteSpace: 'pre-wrap' }}
          fontSize={["sm", "xl"]}
        >            Qualifications Tunisiennes du concours international EUROBOT. EUROBOT est une rencontre de robotique amateur, ouverte aux jeunes réunis au sein d’un club, d’un groupe d’amis ou d’un cadre scolaire. Il a pour objectif de permettre aux jeunes d’être les acteurs de leur apprentissage et de mettre en pratique leurs savoirs, savoir-faire et savoir être, en participant à un événement ludique et convivial. Le challenge technique Senior consiste à construire un robot autonome ainsi qu’un robot secondaire autonome dont la fabrication est facultative. Le challenge technique Junior consiste à construire un robot filoguidé ou télécommandé ainsi qu’un robot secondaire autonome dont la fabrication est facultative.
          <br />            Country: TUNISIA
         <br />           Website: <a href="http://www.atr.tn/" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>http://www.atr.tn/</a>
          <br />            Facebook Page: <a href="https://www.facebook.com/atr.tunisie" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>https://www.facebook.com/atr.tunisie</a>
         <br />       Location: INSAT - National Institute of Applied Science and Technology
         <a href='https://www.eurobot.org'>
              <Button colorScheme="blackAlpha" variant="solid" marginLeft={50} >View More</Button>
            </a>
          </Text>
          
        </VStack>
      </FullScreenSection>
    );
  }
};

export default Eurobot;
