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

const Challenges = () => {
  const toast = useToast();

  return (
    <FullScreenSection
      paddingTop={"10%"}
      id="challenges-section"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color={"var(--title)"} as="h1" size="2xl" paddingBottom="5%">
        Challenges
      </Heading>
      <HStack spacing={8} align="center" maxW="1200px">
        <Card
          direction="column"
          overflow="hidden"
          borderRadius="10px"
          maxW="800px"
          backgroundColor="#F3F4F6"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Image
            zIndex={1}
            borderRadius="10px 10px 0 0"
            src="\suiveur.png"
            alt="robolympix"
            height={["200px", "300px"]}
            width="100%"
            objectFit="cover"
          />
          <HStack p={4} spacing={4} align="start">
            {" "}
            {/* Change VStack to HStack here */}
            <Heading as="h2" size="lg" color="#1E293B">
              RACE IT
            </Heading>
            <Text fontSize={["sm", "md"]} color="#4B5563">
              {/* Add your description here */}
            </Text>
          </HStack>
          <CardFooter
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <a href="https://drive.google.com/file/d/1gECYVhySzYKvsXEDzyvOuwohYR-hYXT_/view?fbclid=IwAR2QF5Cyb56odcIYli-2qmivnioYsJnLqntQavGKIMpwM72ShynIlAoUWrg">
              <Button colorScheme="blackAlpha" variant="solid">
                View More
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card
          direction="column"
          overflow="hidden"
          borderRadius="10px"
          maxW="800px"
          backgroundColor="#F3F4F6"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Image
            zIndex={1}
            borderRadius="10px 10px 0 0"
            src="\derby.jpg"
            alt="robolympix"
            height={["200px", "300px"]}
            width="100%"
            objectFit="cover"
          />
          <HStack p={4} spacing={4} align="start">
            {" "}
            {/* Change VStack to HStack here */}
            <Heading as="h2" size="lg" color="#1E293B">
              DERBY
            </Heading>
            <Text fontSize={["sm", "md"]} color="#4B5563">
              {/* Add your description here */}
            </Text>
          </HStack>
          <CardFooter
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <a href="https://drive.google.com/file/d/1yjuORB5hbp-ris22EYqFYLIc1xbh05Lh/view?fbclid=IwAR1IgLdV_fCkf9SLnD2TR6tALgAqD575Ib5I3QqnrgQd4DY0F3wQS8vklsY">
              <Button colorScheme="blackAlpha" variant="solid">
                View More
              </Button>
            </a>
          </CardFooter>
        </Card>

        <Card
          direction="column"
          overflow="hidden"
          borderRadius="10px"
          maxW="800px"
          backgroundColor="#F3F4F6"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Image
            zIndex={1}
            borderRadius="10px 10px 0 0"
            src="/NAVIGATOR.jpg"
            alt="robolympix"
            height={["200px", "300px"]}
            width="100%"
            objectFit="cover"
          />
          <HStack p={4} spacing={4} align="start">
            {" "}
            {/* Change VStack to HStack here */}
            <Heading as="h2" size="lg" color="#1E293B">
              NAVIGATOR
            </Heading>
            <Text fontSize={["sm", "md"]} color="#4B5563">
              {/* Add your description here */}
            </Text>
          </HStack>
          <CardFooter
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <a href="https://drive.google.com/file/d/1EEH9i54ei0rInYGIdFdZxAeoPiXw9jx1/view?usp=sharing&fbclid=IwAR1GzvYz6LXpjLi4t2Uird7PYk7KTvqzU2b4sJARzJYx8dscTZkKHA_kL_s">
              <Button colorScheme="blackAlpha" variant="solid">
                View More
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card
          direction="column"
          overflow="hidden"
          borderRadius="10px"
          maxW="800px"
          backgroundColor="#F3F4F6"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Image
            zIndex={1}
            borderRadius="10px 10px 0 0"
            src="\THE ADVENTURE.jpg"
            alt="robolympix"
            height={["200px", "300px"]}
            width="100%"
            objectFit="cover"
          />
          <HStack p={4} spacing={4} align="start">
            {" "}
            {/* Change VStack to HStack here */}
            <Heading as="h2" size="sm" color="#1E293B">
              THE <br />
              ADVENTURE
            </Heading>
            <Text fontSize={["sm", "md"]} color="#4B5563">
              {/* Add your description here */}
            </Text>
          </HStack>
          <CardFooter
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <a href="https://drive.google.com/file/d/1WwRb6pvD3I4zS_Fg5rcRXEzCQwulhztG/view?fbclid=IwAR3cZJPGV38lytg3tGzG3HvLv91xT9XPxAnPWMRu1Yktwc-vyEXgDyynn9Q">
              <Button colorScheme="blackAlpha" variant="solid">
                View More
              </Button>
            </a>
          </CardFooter>
        </Card>
      </HStack>
    </FullScreenSection>
  );
};

export default Challenges;
