import {
  Flex,
  VStack,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import MainNav from "./MainNav";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function LandingPage() {
  const btnHoverBg = useColorModeValue("#0056b3", "#007bff");

  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection="column"
      bgImage="url('pokemon.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      p="40px 20px"
      textAlign="center"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <MainNav />

      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexGrow={1}
      >
        <Heading
          as="h5"
          size="2xl"
          fontWeight="bold"
          color="darkgreen"
          marginTop="1px"
          marginBottom="1px"
        >
          Welcome to PokeWars
        </Heading>

        <ConnectButton />
      </Flex>
    </Flex>
  );
}

export default LandingPage;
