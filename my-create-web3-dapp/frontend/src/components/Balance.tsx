import json from "../../../backend/artifacts/contracts/PokeToken.sol/PokeToken.json";
import { useContractRead } from "wagmi";

export function TokenBalance() {
  const { data, isLoading, isError } = useContractRead({
    address: "0xa377a28719bebcb01fdc8adf0c0d100024179ba0",
    abi: json.abi,
    functionName: "balanceOf",
    args: ["0xa8AD8d7386388e85a9e0CAC7EB199bBc558f48bC"],
  });

  const balance = typeof data === "number" ? data : 0;

  if (isLoading) {
    console.log("Fetching balance of poketoken…");
    return <div>Fetching balance of poketoken…</div>;
  } else if (isError) {
    console.log("Error fetching balance of poketoken…");
    return <div>Error fetching balance</div>;
  } else {
    console.log("The balance is: " + balance);
    return <div>Token balance: {balance}</div>;
  }
}
