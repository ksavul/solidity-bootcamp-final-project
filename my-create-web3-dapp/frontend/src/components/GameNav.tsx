// components/GameNav.tsx
import { List, ListItem } from "@chakra-ui/react";

interface GameNavProps {
  setCurrentPage: (page: string) => void;
}

function GameNav({ setCurrentPage }: GameNavProps) {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <List display="flex" spacing={4}>
      <ListItem onClick={() => handleNavigation("game")}>Game</ListItem>
      <ListItem onClick={() => handleNavigation("balance")}>Balance</ListItem>
      <ListItem onClick={() => handleNavigation("SellerFlow")}>
        Selling
      </ListItem>
    </List>
  );
}

export default GameNav;
