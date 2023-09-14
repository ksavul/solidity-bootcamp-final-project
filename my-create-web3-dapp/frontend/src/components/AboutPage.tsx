// import { Box, Image, Flex, Text, VStack, Badge } from "@chakra-ui/react";

// function Card({ name, image, skills }) {
//   return (
//     <Box
//       maxW="sm"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       boxShadow="xl"
//       p={4}
//       bg="white"
//       m={3}
//     >
//       <Image
//         src={image}
//         alt={name}
//         boxSize="200px"
//         objectFit="cover"
//         m="auto"
//       />

//       <VStack align="start">
//         <Text fontWeight="bold" fontSize="xl">
//           {name}
//         </Text>

//         {skills.map((skill, index) => (
//           <Badge key={index} borderRadius="full" px="2" colorScheme="teal">
//             {skill}
//           </Badge>
//         ))}
//       </VStack>
//     </Box>
//   );
// }

// function AboutPage() {
//   const teamMembers = [
//     {
//       name: "Alice",
//       image: "/path/to/alice.jpg",
//       skills: ["React", "Blockchain"],
//     },
//     { name: "Bob", image: "/path/to/bob.jpg", skills: ["Design", "Figma"] },
//     {
//       name: "Charlie",
//       image: "/path/to/charlie.jpg",
//       skills: ["Backend", "NodeJS"],
//     },
//     {
//       name: "Dave",
//       image: "/path/to/dave.jpg",
//       skills: ["Data Science", "Python"],
//     },
//     {
//       name: "Eve",
//       image: "/path/to/eve.jpg",
//       skills: ["Security", "Cryptography"],
//     },
//   ];

//   return (
//     <Box p={8} bg="gray.100" minH="100vh">
//       <Text fontSize="3xl" mb={6} fontWeight="bold">
//         We are Group 2 of Encode
//       </Text>

//       <Flex wrap="wrap" justify="center">
//         {teamMembers.map((member, index) => (
//           <Card key={index} {...member} />
//         ))}
//       </Flex>
//     </Box>
//   );
// }

// export default AboutPage;
