const { Web3 } = require("web3");
const { abi } = require("./EthVault.json");
// Loading the contract ABI
// (the results of a previous compilation step)
const fs = require("fs");
//const { abi } = JSON.parse(fs.readFileSync("EthVault.json"));

async function main() {
  // Configuring the connection to an Ethereum node
  //   const network = process.env.ETHEREUM_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      //   `${process.env.RPC_URL || "http://localhost:8545"}`
      `http://localhost:8545`
    )
  );
  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    "0x" + process.env.PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);
  // Creating a Contract instance
  const contract = new web3.eth.Contract(
    abi,
    // Replace this with the address of your deployed contract
    process.env.CONTRACT_ADDRESS
  );
  // Issuing a transaction that calls the `echo` method
  const method_abi = contract.methods
    // .getTokenBalance("0x82aF49447D8a07e3bd95BD0d56f35241523fBab1")
    .swapUSDC("1000")
    .encodeABI();
  const tx = {
    from: signer.address,
    to: contract.options.address,
    data: method_abi,
    value: "0",
    gasPrice: "100000000000",
  };
  const gas_estimate = await web3.eth.estimateGas(tx);
  tx.gas = gas_estimate;
  const signedTx = await web3.eth.accounts.signTransaction(
    tx,
    signer.privateKey
  );
  console.log("Raw transaction data: " + signedTx.rawTransaction);
  // Sending the transaction to the network
  const receipt = await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .once("transactionHash", (txhash) => {
      console.log(`Mining transaction ...`);
      //   console.log(`https://${network}.etherscan.io/tx/${txhash}`);
    });
  // The transaction is now on chain!
  console.log(`Mined in block ${receipt.blockNumber}`);
  console.log("Transaction receipt:", receipt);
}

require("dotenv").config();
main();
