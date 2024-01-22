
const ethers = require("ethers")
require('dotenv').config();
const {abi} = require('./EthVault.json')

async function main(){

    const  contractAddress =  process.env.CONTRACT_ADDRESS 
    const pKey = process.env.PRIVATE_KEY
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    const signer = new ethers.Wallet(pKey, provider);
    const contract = new  ethers.Contract(contractAddress,abi,signer) // Use signer instead of provider

    const encodeFuncData = contract.interface.encodeFunctionData("swapUSDC") // func name and args 

    const transaction = {
        to: contractAddress, // Send to contract address
        data: encodeFuncData,
    };

    const gasEstimate = await signer.sendTransaction(transaction);
    transaction.gasLimit = gasEstimate;

    
}

main().then((gasEstimate) => console.log('Swapped USDC'));