import { ethers } from "hardhat";
import { NFTPicachu__factory } from "../typechain";  // Make sure TypeChain has generated this factory.

async function main() {
    const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);

    // Initialize factory for your specific contract
    const contractFactory = new NFTPicachu__factory(wallet);

    // Deploy your specific contract
    const contract = await contractFactory.deploy();
    await contract.waitForDeployment();

    const contractAddress = contract.address;
    console.log(`NFTPicachu contract deployed at ${contractAddress}`);

    // Optionally, mint the first token to the deployer's address
    const uri = "https://my-nft-uri.com/token/1";  // Replace this with the URI you want.
    const tx = await contract.safeMint(wallet.address, uri);
    await tx.wait();
    console.log(`Minted first token to ${wallet.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
