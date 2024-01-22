const { Web3 } = require("web3");
require("dotenv").config();

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC_URL));
const { abi } = require("./EthVault.json");

// Replace with your token contract's address
const tokenAddress = process.env.CONTRACT_ADDRESS;

async function swapUSDC() {
  const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);

  const contract = new web3.eth.Contract(abi, tokenAddress);
  const swap = await contract.methods
    // .swapUSDC()
    .getTokenBalance(process.env.USDC)
    // .send({ from: signer.address, gas: 3000000 });
  .call({ from: signer.address, gas: 3000000 });

  return swap;
}

swapUSDC().then((swap) => console.log(swap));
