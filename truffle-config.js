require("dotenv").config();
const infuraProjectId = process.env["INFURA_PROJECT_ID"];
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = process.env.PRIVATE_KEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
const coinMarketCap = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          `https://rinkeby.infura.io/v3/${infuraProjectId}`
        ),
      network_id: 4,
    },
  },

  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      enabled: true,
      currency: "USD",
      outputFile: "gas-report.txt",
      noColors: true,
      coinmarketcap: coinMarketCap,
    },
  },
  compilers: {
    solc: {
      version: "0.8.16",
    },
  },
  plugins: ["solidity-coverage", "truffle-plugin-verify"],
  api_keys: {
    etherscan: etherscanApiKey,
  },
};
