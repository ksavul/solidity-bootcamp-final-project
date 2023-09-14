import { useContractRead, useContractWrite } from "wagmi";
import json from "../../../backend/artifacts/contracts/PokeToken.sol/PokeToken.json";
import { Button } from "@chakra-ui/react";

export function MintToken() {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0x2D4a6711C7163c55381a361eD146e1AC605CE02E",
    abi: json,
    functionName: "mint",
    args: ["0xa8AD8d7386388e85a9e0CAC7EB199bBc558f48bC"],
  });

  return (
    <div>
      <Button onClick={() => write()}>Mint Tokens</Button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
}

export function HasMinted() {
  const { data } = useContractRead({
    address: "0x2D4a6711C7163c55381a361eD146e1AC605CE02E",
    abi: json,
    functionName: "hasMinted",
    args: ["0xa8AD8d7386388e85a9e0CAC7EB199bBc558f48bC"],
  });
  const minted = typeof data === "boolean" ? data : 0;
  console.log("minted: " + minted);
  return minted;
}
