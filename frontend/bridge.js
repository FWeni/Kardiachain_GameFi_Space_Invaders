// const { score } = require('./game/game.js');
// import { ethers } from "../node_modules/hardhat";
// import { ethers } from './initFiles/initEthers';
import {ethers} from 'hardhat';
// console.log({ ethers })

// Player's Score
const _newRecord = parseInt(document.getElementById('scoreElement').innerText);
console.log('_newRecord', _newRecord)
//Contract address
const contractAddress = "0x26ecCe97b33f3fFe5fC502163d9fE943fB4aC75f";

// Contract abi
const contractABI = {
    "id": "512f22e3d35d34e251d96217a6dd059a",
    "_format": "hh-sol-build-info-1",
    "solcVersion": "0.7.3",
    "solcLongVersion": "0.7.3+commit.9bfce1f6",
    "input": {
      "language": "Solidity",
      "sources": {
        "contracts/HighScoreRecorder.sol": {
          "content": "// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0 <0.9.0;\n\ncontract HighScoreRecorder {\n  // address player;\n  uint public record;\n\n  // function setCurrentPlayer(address _player) public {\n  //   player = _player;\n  // }\n\n  // function getCurrentPlayer() external view returns  (address) {\n  //     return player;\n  // }\n\n  function setNewRecord(uint _record) public {\n    record = _record;\n  }\n\n  function getNewRecord() external view returns (uint) {\n      return record;\n  }\n}"
        }
      },
      "settings": {
        "optimizer": {
          "enabled": true,
          "runs": 200
        },
        "outputSelection": {
          "*": {
            "*": [
              "abi",
              "evm.bytecode",
              "evm.deployedBytecode",
              "evm.methodIdentifiers",
              "metadata"
            ],
            "": [
              "ast"
            ]
          }
        }
      }
    },
    "output": {
      "contracts": {
        "contracts/HighScoreRecorder.sol": {
          "HighScoreRecorder": {
            "abi": [
              {
                "inputs": [],
                "name": "getNewRecord",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "record",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_record",
                    "type": "uint256"
                  }
                ],
                "name": "setNewRecord",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              }
            ],
            "evm": {
              "bytecode": {
                "generatedSources": [],
                "linkReferences": {},
                "object": "608060405234801561001057600080fd5b5060c28061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063266cf109146041578063539c5afd14605957806384ccfcca14605f575b600080fd5b6047607b565b60408051918252519081900360200190f35b60476081565b607960048036036020811015607357600080fd5b50356087565b005b60005481565b60005490565b60005556fea2646970667358221220b95b6bfd9f1dd200f1ac985b48fbff536310f3c718ea5dfc7fd02c0612568f7364736f6c63430007030033",
                "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0xC2 DUP1 PUSH2 0x1F PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x3C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x266CF109 EQ PUSH1 0x41 JUMPI DUP1 PUSH4 0x539C5AFD EQ PUSH1 0x59 JUMPI DUP1 PUSH4 0x84CCFCCA EQ PUSH1 0x5F JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x47 PUSH1 0x7B JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH1 0x47 PUSH1 0x81 JUMP JUMPDEST PUSH1 0x79 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH1 0x73 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH1 0x87 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD SWAP1 JUMP JUMPDEST PUSH1 0x0 SSTORE JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xB9 JUMPDEST PUSH12 0xFD9F1DD200F1AC985B48FBFF MSTORE8 PUSH4 0x10F3C718 0xEA 0x5D 0xFC PUSH32 0xD02C0612568F7364736F6C634300070300330000000000000000000000000000 ",
                "sourceMap": "65:420:0:-:0;;;;;;;;;;;;;;;;;;;"
              },
              "deployedBytecode": {
                "generatedSources": [],
                "immutableReferences": {},
                "linkReferences": {},
                "object": "6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063266cf109146041578063539c5afd14605957806384ccfcca14605f575b600080fd5b6047607b565b60408051918252519081900360200190f35b60476081565b607960048036036020811015607357600080fd5b50356087565b005b60005481565b60005490565b60005556fea2646970667358221220b95b6bfd9f1dd200f1ac985b48fbff536310f3c718ea5dfc7fd02c0612568f7364736f6c63430007030033",
                "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH1 0x3C JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x266CF109 EQ PUSH1 0x41 JUMPI DUP1 PUSH4 0x539C5AFD EQ PUSH1 0x59 JUMPI DUP1 PUSH4 0x84CCFCCA EQ PUSH1 0x5F JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x47 PUSH1 0x7B JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST PUSH1 0x47 PUSH1 0x81 JUMP JUMPDEST PUSH1 0x79 PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH1 0x73 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH1 0x87 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD SWAP1 JUMP JUMPDEST PUSH1 0x0 SSTORE JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xB9 JUMPDEST PUSH12 0xFD9F1DD200F1AC985B48FBFF MSTORE8 PUSH4 0x10F3C718 0xEA 0x5D 0xFC PUSH32 0xD02C0612568F7364736F6C634300070300330000000000000000000000000000 ",
                "sourceMap": "65:420:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;117:18;;;:::i;:::-;;;;;;;;;;;;;;;;404:79;;;:::i;330:70::-;;;;;;;;;;;;;;;;-1:-1:-1;330:70:0;;:::i;:::-;;117:18;;;;:::o;404:79::-;451:4;472:6;404:79;:::o;330:70::-;379:6;:16;330:70::o"
              },
              "methodIdentifiers": {
                "getNewRecord()": "539c5afd",
                "record()": "266cf109",
                "setNewRecord(uint256)": "84ccfcca"
              }
            },
            "metadata": "{\"compiler\":{\"version\":\"0.7.3+commit.9bfce1f6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"getNewRecord\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"record\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_record\",\"type\":\"uint256\"}],\"name\":\"setNewRecord\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/HighScoreRecorder.sol\":\"HighScoreRecorder\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"contracts/HighScoreRecorder.sol\":{\"keccak256\":\"0x08404837dafbd5b163d1b845fd7e2bb87d3fb54c5e3583b594425ca7102aaee8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://56a0e724e4dbefcad929c8f2dd4b40fae1cb5e5d27756bee6625dc9ee1cee37a\",\"dweb:/ipfs/QmZaduvhyZ5eZNaFPXnUX4gZvYkCQFJ9SSW6gtRr2R9uan\"]}},\"version\":1}"
          }
        }
      },
      "sources": {
        "contracts/HighScoreRecorder.sol": {
          "ast": {
            "absolutePath": "contracts/HighScoreRecorder.sol",
            "exportedSymbols": {
              "HighScoreRecorder": [
                22
              ]
            },
            "id": 23,
            "license": "MIT",
            "nodeType": "SourceUnit",
            "nodes": [
              {
                "id": 1,
                "literals": [
                  "solidity",
                  ">=",
                  "0.5",
                  ".0",
                  "<",
                  "0.9",
                  ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "32:31:0"
              },
              {
                "abstract": false,
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "id": 22,
                "linearizedBaseContracts": [
                  22
                ],
                "name": "HighScoreRecorder",
                "nodeType": "ContractDefinition",
                "nodes": [
                  {
                    "constant": false,
                    "functionSelector": "266cf109",
                    "id": 3,
                    "mutability": "mutable",
                    "name": "record",
                    "nodeType": "VariableDeclaration",
                    "scope": 22,
                    "src": "117:18:0",
                    "stateVariable": true,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "117:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "public"
                  },
                  {
                    "body": {
                      "id": 12,
                      "nodeType": "Block",
                      "src": "373:27:0",
                      "statements": [
                        {
                          "expression": {
                            "id": 10,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 8,
                              "name": "record",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3,
                              "src": "379:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 9,
                              "name": "_record",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5,
                              "src": "388:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "379:16:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 11,
                          "nodeType": "ExpressionStatement",
                          "src": "379:16:0"
                        }
                      ]
                    },
                    "functionSelector": "84ccfcca",
                    "id": 13,
                    "implemented": true,
                    "kind": "function",
                    "modifiers": [],
                    "name": "setNewRecord",
                    "nodeType": "FunctionDefinition",
                    "parameters": {
                      "id": 6,
                      "nodeType": "ParameterList",
                      "parameters": [
                        {
                          "constant": false,
                          "id": 5,
                          "mutability": "mutable",
                          "name": "_record",
                          "nodeType": "VariableDeclaration",
                          "scope": 13,
                          "src": "352:12:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 4,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "352:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "src": "351:14:0"
                    },
                    "returnParameters": {
                      "id": 7,
                      "nodeType": "ParameterList",
                      "parameters": [],
                      "src": "373:0:0"
                    },
                    "scope": 22,
                    "src": "330:70:0",
                    "stateMutability": "nonpayable",
                    "virtual": false,
                    "visibility": "public"
                  },
                  {
                    "body": {
                      "id": 20,
                      "nodeType": "Block",
                      "src": "457:26:0",
                      "statements": [
                        {
                          "expression": {
                            "id": 18,
                            "name": "record",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3,
                            "src": "472:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "functionReturnParameters": 17,
                          "id": 19,
                          "nodeType": "Return",
                          "src": "465:13:0"
                        }
                      ]
                    },
                    "functionSelector": "539c5afd",
                    "id": 21,
                    "implemented": true,
                    "kind": "function",
                    "modifiers": [],
                    "name": "getNewRecord",
                    "nodeType": "FunctionDefinition",
                    "parameters": {
                      "id": 14,
                      "nodeType": "ParameterList",
                      "parameters": [],
                      "src": "425:2:0"
                    },
                    "returnParameters": {
                      "id": 17,
                      "nodeType": "ParameterList",
                      "parameters": [
                        {
                          "constant": false,
                          "id": 16,
                          "mutability": "mutable",
                          "name": "",
                          "nodeType": "VariableDeclaration",
                          "scope": 21,
                          "src": "451:4:0",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 15,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "451:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "src": "450:6:0"
                    },
                    "scope": 22,
                    "src": "404:79:0",
                    "stateMutability": "view",
                    "virtual": false,
                    "visibility": "external"
                  }
                ],
                "scope": 23,
                "src": "65:420:0"
              }
            ],
            "src": "32:453:0"
          },
          "id": 0
        }
      }
    }
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