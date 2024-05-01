import FullScreenSection from "./FullScreenSection.jsx";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <FullScreenSection
      height={["100%", "125vh"]}
      id="intro-section"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ffffff"
      // backgroundColor="rgba(229, 231, 235, 0.8)" // Set the background color to transparent with 0.8 alpha
    >
      <VStack zIndex={1} spacing={10}>
        <Heading
          marginTop={["5%", "25%"]}
          color={"var(--title)"}
          fontSize={["xl", "5xl"]}
        >
          A propos
        </Heading>
        <Text
          id="landing-text"
          margin="5% 4% 3% 4%"
          style={{ fontFamily: "cursive", whiteSpace: "pre-wrap" }}
          fontSize={["sm", "xl"]}
        >
          Robolympix est l’évènement scientifique incontournable dans sa
          deuxième édition. C’est l’une des plus grandes compétitions annuelles
          de robotique en Tunisie. Lancé en 2021 par L’AEROBOTIX INSAT pour
          stimuler l’innovation, cet évènement comporte dans cette 2eme version
          de nombreux enjeux scientifiques et technologiques. La Robolympix V
          2.0 rassemble les meilleures équipes de robotique en Tunisie et le
          monde entier. <br />
          La première édition de Robolympix était le 19/12/2021. Vous pouvez
          revivre cette édition avec notre galerie !
        </Text>

        <Image
          marginBottom={["-25%", "10%"]}
          height={["100px", "200px"]}
          src="\cool-robot.png"
        />
      </VStack>
    </FullScreenSection>
  );
};

export default About;
