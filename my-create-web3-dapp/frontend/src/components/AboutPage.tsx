import { Box, Image, Flex, Text, VStack, Badge } from "@chakra-ui/react";
import MainNav from "./MainNav";

function Card({ name, image, skills }: CardProps) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
      p={4}
      bg="white"
      m={3}
    >
      <Box bg="gray.100" borderRadius="lg" overflow="hidden">
        <Image
          src={image}
          alt={name}
          width="100%"
          maxHeight="220px" // Set a max height
          objectFit="cover" // This ensures the aspect ratio is maintained and the image is resized to fit the container.
        />
      </Box>

      <VStack align="start" mt={4}>
        <Text fontWeight="bold" color="green" fontSize="xl">
          {name}
        </Text>

        {skills.map((skill, index) => (
          <Badge key={index} borderRadius="full" px="2" colorScheme="teal">
            {skill}
          </Badge>
        ))}
      </VStack>
    </Box>
  );
}

function AboutPage() {
  const teamMembers = [
    {
      name: "Ratkosaur",
      image: "../public/images/bulbasaur.png",
      skills: ["Frontend", "Backend"],
    },
    {
      name: "Daltonpie",
      image: "/images/caterpie.png",
      skills: ["Frontend", "Smart Contracts"],
    },
    {
      name: "Kimander",
      image: "/images/charmander.png",
      skills: ["Scrum Master", "Smart Contracts"],
    },
    {
      name: "Gonzalochu",
      image: "/images/pikachu.png",
      skills: ["Smart Contracts", "Frontend"],
    },
    {
      name: "Domingortle",
      image: "/images/squirtle.png",
      skills: ["Backend", "Smart Contracts"],
    },
  ];

  return (
    <Box p={8} bg="white" minH="100vh">
      <MainNav />
      <Text fontSize="3xl" color="green.500" mb={6} fontWeight="bold">
        We are Group 2 of Encode
      </Text>

      <Flex wrap="wrap" justify="center">
        {teamMembers.map((member, index) => (
          <Card key={index} {...member} />
        ))}
      </Flex>
    </Box>
  );
}

export default AboutPage;
