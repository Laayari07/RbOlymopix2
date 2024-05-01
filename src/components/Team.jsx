import {
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";

const Team = () => {
  const TeamMembers = [
    {
      name: "Mohamed Moussi",
      role: "Président",
      image: "/comité/1.png",
    },
    {
      name: "Rayen Zahzeh",
      role: "Responsable technique de l'équipe",
      image: "/comité/2.png",
    },
    {
      name: "Lina Hamad",
      role: "Secrétaire général",
      image: "/comité/3.png",
    },
    {
      name: "Kmar Ben Ayed",
      role: "Responsable de la co-organisation",
      image: "/comité/4.png",
    },
    {
      name: "Nour Fekih",
      role: "Responsable de la co-organisation",
      image: "/comité/5.png",
    },
    {
      name: "Rahma Zouali",
      role: "Responsable des ambassadeurs",
      image: "/comité/6.png",
    },
    {
      name: "Saif Eddine Ayari ",
      role: "Web Master",
      image: "/comité/7.png",
    },
    {
      name: "Bochra Chebi",
      role: "Responsable des ressources humaines",
      image: "/comité/8.png",
    },
    {
      name: "Aicha Guidara",
      role: "Responsable des médias",
      image: "/comité/9.png",
    },
  ];

  return (
    <FullScreenSection
      id="team-section"
      justifyContent="center"
      alignItems="center"
    >
      <Heading color="#6b0303" as="h1" size="2xl" padding="5% 3% 4% 3%">
        Rencontrez notre équipe
      </Heading>

      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={8}
        justifyContent="center"
      >
        {TeamMembers.map((member, index) => (
          <GridItem key={index} style={{ zIndex: 1 }}>
            <Flex direction="column" alignItems="center">
              <Image
                src={member.image}
                alt={member.name}
                borderRadius="full"
                boxSize="150px"
                marginBottom="4"
                zIndex={1}
              />

              <Text
                fontSize="xl"
                fontWeight="bold"
                marginBottom="2"
                color="#000147"
              >
                {member.name}
              </Text>

              <Text fontSize="md" color="#363635">
                {member.role}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </FullScreenSection>
  );
};

export default Team;
