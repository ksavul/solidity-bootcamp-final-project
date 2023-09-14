import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { TokenBalance, TokenName } from "../hooks/TokenInfo";
import { useAccount } from "wagmi";
import { HasMinted } from "../hooks/MintToken";
import MainNav from "./MainNav";
import { useNavigate } from "react-router-dom";

function NewUserPage() {
  const [pokeTokens] = useState(10);
  const [cards] = useState([]);

  const { address } = useAccount();
  const navigate = useNavigate();

  // const checkminted = () => {
  //   const hasUserMinted = HasMinted();
  //   if (hasUserMinted) {
  //     navigate("/dashboard");
  //   }
  //   console.log("Has user minted " + hasUserMinted);
  // };

  const handleConvertToCards = () => {
    // Implement the logic to convert PokeTokens to a random set of cards
    // and update the 'cards' state accordingly.
  };

  // useEffect(() => {
  //   checkminted();
  // }, []);

  return (
    <>
      <MainNav />
      <TokenBalance address={address} />
      <TokenName />

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
          {/* <MintToken address="{address}" /> */}
          Mint PokeTokens
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
    </>
  );
}

export default NewUserPage;
