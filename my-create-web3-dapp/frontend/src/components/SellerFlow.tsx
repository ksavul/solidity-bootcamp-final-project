import React from "react";
import {
  Box,
  Grid,
  Image,
  Input,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit"; // Import UI components

function SellerFlow() {
  return (
    <Grid
      templateColumns={["1fr", "1fr 1fr"]} // Responsive two-column layout
      gap={4} // Gap between the columns
      padding={4} // Add padding to the entire page
    >
      {/* Left side: Card Image */}
      <Box>
        <Image
          src="path_to_card_image.png" // Replace with the actual path to our card images that need to be displayed
          alt="Card Image"
          maxH="80vh"
          objectFit="contain" // Maintain aspect ratio of the image
        />
      </Box>

      {/* Right side: Ask Price Section */}
      <Box>
        <VStack spacing={4} align="center">
          {/* Title */}
          <Heading as="h2" size="lg">
            Card Details
          </Heading>

          {/* Ask Price Input */}
          <Input
            type="number"
            placeholder="Enter Ask Price"
            size="lg"
            width="80%"
          />

          {/* Sell Button */}
          <Button colorScheme="blue" size="lg">
            Sell
          </Button>
        </VStack>
      </Box>
    </Grid>
  );
}

export default SellerFlow;
