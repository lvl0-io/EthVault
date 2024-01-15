const { ethers } = require("ethers");

// Connect to the Ethereum network
const provider = new ethers.providers.JsonRpcProvider(
  process.env.RPC_URL || "http://localhost:8545"
);

// Set up your Ethereum wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Contract details
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = [
  /* ...ABI... */
];

// Create contract instance
const ethVault = new ethers.Contract(contractAddress, contractABI, wallet);

// Data for the transaction
const tokenAddress = "TOKEN_CONTRACT_ADDRESS";
const amount = ethers.utils.parseEther("1"); // The amount you want to deposit

// Sending the transaction
ethVault
  .getTokenBalance(tokenAddress)
  .then((tx) => tx.wait())
  .then((receipt) => console.log("Transaction receipt:", receipt))
  .catch((error) => console.error("Error:", error));
