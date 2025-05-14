const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'turn initial math extra next law gun clown lazy begin song atom';  // встав сюди свою фразу
const infuraKey = '36c639fc37974033a0397b1d53eb29c1';    // встав сюди свій ID з Infura

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`),
      network_id: 11155111,   // це ID мережі Sepolia
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  compilers: {
    solc: {
      version: "0.8.20",
    }
  }
};
