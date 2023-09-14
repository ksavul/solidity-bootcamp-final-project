import { SimpleGrid } from "@chakra-ui/react";
import MainNav from "./MainNav";
import useGames from "../hooks/UseGames";
import GameCard from "./GameCard";

const MyProfilePage = () => {
  const { games } = useGames();

  return (
    <>
      <MainNav />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MyProfilePage;
