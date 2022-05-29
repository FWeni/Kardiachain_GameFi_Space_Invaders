// const { score } = require('./game/game.js');
// import { ethers } from "../node_modules/hardhat";
// import { ethers } from './initFiles/initEthers';
import {ethers} from 'hardhat';
// console.log({ ethers })

// Player's Score
const _newRecord = parseInt(document.getElementById('scoreElement').innerText);
console.log('_newRecord', _newRecord)
//Contract address
const contractAddress = "0xfe2D13AF4CC630F2273C107618f7F1a5C2AC35E6";

// Contract abi
const contractABI = {
    "_format": "hh-sol-artifact-1",
    "contractName": "HighScoreRecorder",
    "sourceName": "contracts/HighScoreRecorder.sol",
    "abi": [{
            "inputs": [],
            "name": "getNewRecord",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "record",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_record",
                "type": "uint256"
            }],
            "name": "setNewRecord",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5060c28061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063266cf109146041578063539c5afd14605957806384ccfcca14605f575b600080fd5b6047607b565b60408051918252519081900360200190f35b60476081565b607960048036036020811015607357600080fd5b50356087565b005b60005481565b60005490565b60005556fea2646970667358221220b95b6bfd9f1dd200f1ac985b48fbff536310f3c718ea5dfc7fd02c0612568f7364736f6c63430007030033",
    "deployedBytecode": "0x6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063266cf109146041578063539c5afd14605957806384ccfcca14605f575b600080fd5b6047607b565b60408051918252519081900360200190f35b60476081565b607960048036036020811015607357600080fd5b50356087565b005b60005481565b60005490565b60005556fea2646970667358221220b95b6bfd9f1dd200f1ac985b48fbff536310f3c718ea5dfc7fd02c0612568f7364736f6c63430007030033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}

async function updateNewHighScore() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const interContract = new ethers.Contract(contractAddress, contractABI, provider);

    const newRecord = await interContract.setNewRecord(_newRecord);
    console.log(_newRecord);
    return newRecord;
}

async function getCurrentHighScore() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const interContract = new ethers.Contract(contractAddress, contractABI, provider);

    const currentRecord = await interContract.record();
    console.log(currentRecord);
}