// LandingPage.jsx
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box, Center, Heading, Button } from "@chakra-ui/react";

function LandingPage() {
  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Heading as="h5" size="lg" mb="4">
          Welcome to PokeWars
        </Heading>
        <Button colorScheme="" id="btn" size="lg">
          <ConnectButton />
        </Button>
      </Box>
    </Center>
  );
}

export default LandingPage;
