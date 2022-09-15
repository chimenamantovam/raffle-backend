const Raffle = artifacts.require("Raffle");

async function getBalance() {
  const raffle = await Raffle.new();
  const contractAddress = raffle.address;
  const balance = await web3.eth.getBalance(contractAddress);
  const etherBalance = web3.utils.fromWei(balance, "ether");
  return etherBalance;
}

module.exports.getBalance = getBalance;
