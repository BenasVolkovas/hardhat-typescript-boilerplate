import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import "dotenv/config";

const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL ||
    "https://eth-goerli.g.alchemy.com/v2/your-api-key";
const MUMBAI_RPC_URL =
    process.env.MUMBAI_RPC_URL ||
    "https://polygon-mumbai.g.alchemy.com/v2/your-api-key";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY =
    process.env.ETHERSCAN_API_KEY || "Your etherscan API key";
const POLYGONSCAN_API_KEY =
    process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key";
const REPORT_GAS = process.env.REPORT_GAS === "true" || false;
const COINMARKETCAP_API_KEY =
    process.env.COINMARKETCAP_API_KEY || "Your coinmarketcap API key";

const config: HardhatUserConfig = {
    solidity: "0.8.9",
    defaultNetwork: "hardhat",

    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            // saveDeployments: true,
            chainId: 5,
        },
        mumbai: {
            url: MUMBAI_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            // saveDeployments: true,
            chainId: 80001,
        },
    },
    etherscan: {
        apiKey: {
            goerli: ETHERSCAN_API_KEY,
        },
    },
    gasReporter: {
        enabled: REPORT_GAS,
        currency: "EUR",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    // namedAccounts: {
    //     deployer: {
    //         default: 0, // here this will by default take the first account as deployer
    //         1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    //     },
    // },
};

export default config;
