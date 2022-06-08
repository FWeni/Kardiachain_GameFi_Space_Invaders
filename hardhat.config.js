require("@nomiclabs/hardhat-waffle");

const KAI_PRIVATE_KEY = "8e22cf4f3bf66fa4960b5f8bced535b5f6c5b9c6f60d36ef82b567ae017c9137";

module.exports = {
    defaultNetwork: "kardiachain",
    networks: {
        hardhat: {
            chainId: 1337
        },
        kardiachain: {
            url: "https://dev.kardiachain.io/",
            accounts: [`${KAI_PRIVATE_KEY}`]
        }
    },
    solidity: {
        version: "0.7.3",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}