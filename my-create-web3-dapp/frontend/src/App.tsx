import { useState } from "react";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import LandingPage from "./components/LandingPage";
import Balance from "./components/NewUserPage";
// import SellerFlow from "./components/sellerFlow";
import GameNav from "./components/GameNav";

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
      // case "SellerFlow":
      //   return <SellerFlow />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div>
      {currentPage !== "landing" && <GameNav setCurrentPage={setCurrentPage} />}
      {renderPage()}
    </div>
  );
}

export default App;
