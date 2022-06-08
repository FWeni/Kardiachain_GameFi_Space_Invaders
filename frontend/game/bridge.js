// const { score } = require('./game/game.js');
// import { ethers } from "../node_modules/hardhat";
// import { ethers } from './initFiles/initEthers';
// import { ethers } from 'hardhat';
// console.log({ ethers })
// Player's Score
var lsScore = localStorage.getItem("score");
const _newRecord = parseInt(lsScore || 0);

console.log('_newRecord', _newRecord)
var savedRecord = document.getElementById('held-record');
//Contract address
const contractAddress = "0xbEd97598CfCD53D6B3A144A7c5BdFc2012f8e0C2";

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


// async function updateNewHighScore() {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const interContract = new ethers.Contract(contractAddress, contractABI, provider);

//     const newRecord = await interContract.setNewRecord(_newRecord);
//     console.log(_newRecord);
//     return newRecord;
// }

// async function getCurrentHighScore() {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const interContract = new ethers.Contract(contractAddress, contractABI, provider);

//     const currentRecord = await interContract.record();
//     console.log(currentRecord);
// }
const provider = new ethers.providers.JsonRpcProvider('https://dev.kardiachain.io/');

function record_getter() {
    // const contractAddress = '0x2Bc7A39c22403dA3617b237D42BF0db2C5dcaBA1'
    const connectedContract = new ethers.Contract(contractAddress, contractABI.abi, provider);
    const txn = connectedContract.getNewRecord()
    savedRecord.innerHTML = txn
    console.log(txn)
    txn.then(function(result) {
        alert(result)
    })
}

function record_setter() {
    // const contractAddress = '0x2Bc7A39c22403dA3617b237D42BF0db2C5dcaBA1'
    console.log('__newScore: ', _newRecord)
    const connectedContract = new ethers.Contract(contractAddress, contractABI.abi, provider);
    const txn = connectedContract.setNewRecord(_newRecord);
    localStorage.setItem("txn", _newRecord);

    console.log('tx: ', txn)
        // savedRecord.innerHTML = txn
    txn.then(function(result) {
        alert(result)
    })
}