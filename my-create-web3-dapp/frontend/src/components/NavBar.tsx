// components/NavBar.tsx
import React from "react";
import { HStack, Image, List, ListItem } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Define a prop type for setCurrentPage
interface NavBarProps {
  setCurrentPage: (page: string) => void;
}

function NavBar({ setCurrentPage }: NavBarProps) {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <HStack justifyContent="space-between" padding="10px">
      <nav>
        <List>
          <ListItem paddingY="7px" paddingX="5px">
            <button onClick={() => handleNavigation("landingPage")}>
              Home
            </button>
          </ListItem>
          <ListItem paddingY="7px" paddingX="5px">
            <button onClick={() => handleNavigation("game")}>Game</button>
          </ListItem>
          <ListItem paddingY="7px" paddingX="5px">
            <button onClick={() => handleNavigation("balance")}>Balance</button>
          </ListItem>
          {/* Add more navigation links/buttons as needed */}
        </List>
      </nav>

      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
