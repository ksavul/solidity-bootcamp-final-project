import { useContractRead } from "wagmi";
import json from "../../../backend/artifacts/contracts/PokeToken.sol/PokeToken.json";

export function TokenName() {
  const { data } = useContractRead({
    address: "0xA4E08B3bcF74fa244ca437A91B2b6eb9E2d1BFD4",
    abi: json,
    functionName: "name",
  });

  const name = typeof data === "string" ? data : 0;
  console.log("name: " + name);
  return name;
}

export function TokenBalance(params: { address?: string }) {
  const { data, isLoading, isError } = useContractRead({
    address: "0xA4E08B3bcF74fa244ca437A91B2b6eb9E2d1BFD4",
    abi: json,
    functionName: "balanceOf",
    args: [params.address],
  });

  console.log("Raw balance data:", data); // Log the raw data

  if (isLoading) {
    console.log("Fetching balance...");
    return null; // or return a loading state
  }

  if (isError) {
    console.error("Error fetching balance");
    return null; // or return an error state
  }

  const balance = typeof data === "bigint" ? Number(data) : 0;
  console.log("Processed balance:", balance / 1000000000000000000);
  return balance / 1000000000000000000;
}
