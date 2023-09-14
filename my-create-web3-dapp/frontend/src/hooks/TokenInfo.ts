import { useContractRead } from "wagmi";
import json from "../../../backend/artifacts/contracts/PokeToken.sol/PokeToken.json";

export function TokenName() {
  const { data } = useContractRead({
    address: "0xa377a28719bebcb01fdc8adf0c0d100024179ba0",
    abi: json.abi,
    functionName: "name",
  });

  const name = typeof data === "string" ? data : 0;
  console.log("name: " + name);
  return name;
}

// export function TokenBalance(params: { address: `0x${string}` }) {
//   const { data } = useContractRead({
//     address: "0xa377a28719bebcb01fdc8adf0c0d100024179ba0",
//     abi: json.abi,
//     functionName: "balanceOf",
//     args: [params.address],
//   });

//   const balance = typeof data === "number" ? data : 0;
//   console.log("Balance: " + balance);
//   return balance;
// }
