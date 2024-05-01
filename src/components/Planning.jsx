import FullScreenSection from "./FullScreenSection.jsx";
import {
  Button,
  Card,
  CardFooter,
  Heading,
  Image,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";

const Planning = () => {
  const toast = useToast();

  return (
    <FullScreenSection
      paddingTop={"10%"}
      id="planning-section"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color={"var(--title)"} as="h1" size="2xl" paddingBottom="5%">
        Planning{" "}
      </Heading>
      <HStack spacing={8} align="center" maxW="1200px">
        <Card
          direction="column"
          overflow="hidden"
          borderRadius="10px"
          maxW="1000px"
          backgroundColor="#F3F4F6"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Image
            zIndex={1}
            borderRadius="10px 10px 0 0"
            src="planning1.jpg"
            alt="planning"
            height={["400px", "500px"]}
            width="100%"
            objectFit="cover"
          />
        </Card>
        <Card
          direction="column"
          overflow="hidden"
          borderRadius="10px"
          maxW="1000px"
          backgroundColor="#F3F4F6"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Image
            zIndex={1}
            borderRadius="10px 10px 0 0"
            src="planning2.jpg"
            alt="planning"
            height={["400px", "500px"]}
            width="100%"
            objectFit="cover"
          />
        </Card>
      </HStack>
    </FullScreenSection>
  );
};

export default Planning;
