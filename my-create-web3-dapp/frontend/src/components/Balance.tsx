import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function Balance() {
  const [pokeTokens, setPokeTokens] = useState(10);
  const [cards, setCards] = useState([]);

  const handleConvertToCards = () => {
    // Implement the logic to convert PokeTokens to a random set of cards
    // and update the 'cards' state accordingly.
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <VStack spacing={1} align="center" p={2}>
          <Text fontSize="xl" fontWeight="bold">
            Balance
          </Text>
          <Text>You have {pokeTokens} PokeTokens.</Text>
        </VStack>
        <Button onClick={handleConvertToCards} colorScheme="blue">
          Convert PokeTokens to Cards
        </Button>
      </div>

      <Divider orientation="vertical" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <VStack spacing={3} align="center" p={4}>
          <Text fontSize="xl" fontWeight="bold">
            Your Cards
          </Text>
          <UnorderedList>
            {cards.map((card, index) => (
              <ListItem key={index}>{card}</ListItem>
            ))}
          </UnorderedList>
        </VStack>
        <Button colorScheme="green">Trade</Button>
      </div>
    </Box>
  );
}

export default Balance;
