import React, { useState } from "react";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import LandingPage from "./components/LandingPage";
import Balance from "./components/LandingPage";

function App() {
  const [currentPage, setCurrentPage] = useState("landing"); // Default to 'landing' page

  // Function to render the current page based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage />;
      case "game":
        return <GameGrid />;
      case "balance":
        return <Balance />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <Box
      backgroundImage="url('/src/imgTest/test.jpg')" // Replace with the actual path to your image
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      minHeight="100vh" // Ensures the background covers the entire viewport height
    >
      {/* Your content goes here */}

      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar setCurrentPage={setCurrentPage} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside"></GridItem>
        </Show>
        <GridItem area="main">{renderPage()}</GridItem>
      </Grid>
    </Box>
  );
}

export default App;
