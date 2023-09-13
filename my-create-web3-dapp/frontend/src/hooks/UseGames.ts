import { useEffect, useState } from "react";
import jsonData from "../../public/poke.json"; // Import the JSON file

// Define the interface for a Pokemon card
export interface Game {
  id: string;
  set: string;
  name: string;
  supertype: string;
  subtypes: string[];
  types: string[];
  number: string;
  rarity: string;
  images: {
    small: string;
    large: string;
    foil?: string; // These properties are optional, adjust as needed
    mask?: string;
  };
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
      // Simulate an asynchronous operation to load the data
      const fetchData = async () => {
        // Replace this with your actual data loading logic if needed
        // For now, we're just setting the data from the imported JSON file
        setGames(jsonData as Game[]); // Use a type assertion to specify the data type
      };

      fetchData();
    } catch (err: any) {
      setError(err.message);
    }
  }, []);

  return { games, error };
};

export default useGames;
