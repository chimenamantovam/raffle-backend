const { expectRevert } = require("@openzeppelin/test-helpers");
const { getBalance } = require("./helpers");
const Raffle = artifacts.require("Raffle");
let raffle;

beforeEach(async () => {
  raffle = await Raffle.new();
});

// Contrato Raffle
contract("Raffle", (accounts) => {
  it("Should be zero balance.", async () => {
    assert.strictEqual(await getBalance(), "0");
  });

  //Constructor
  describe("Constructor()", () => {
    it("Should not be the owner.", async () => {
      const ownerAddress = await raffle.OWNER();
      assert.notEqual(ownerAddress, accounts[1]);
    });

    it("Should be the owner.", async () => {
      const ownerAddress = await raffle.OWNER();
      assert.strictEqual(ownerAddress, accounts[0]);
    });
  });

  //test enter function
  describe("enter()", async () => {
    it("Should revert value less than 0.00001", async () => {
      const new_player = accounts[1];
      await expectRevert(
        raffle.enter({ from: new_player, value: String(10e2) }),
        "The value should be higher than 0.00001"
      );
    });

    it("Should add the player in the contract.", async () => {
      await raffle.enter({ from: accounts[1], value: String(10e16) });
      const player = await raffle.getPlayers();
      assert.strictEqual(accounts[1], player[0]);
    });
  });

  //test getWinner function
  describe("getWinner()", () => {
    it("Should not allow players to select the winner.", async () => {
      await expectRevert(
        raffle.getWinner({ from: accounts[1] }),
        "This function is restricted to the contract's owner."
      );
    });

    it("Should allow owner select winner.", async () => {
      await raffle.enter({ from: accounts[1], value: String(10e16) });
      await raffle.enter({ from: accounts[2], value: String(10e16) });
      await raffle.enter({ from: accounts[3], value: String(10e16) });
      await raffle.getWinner({ from: accounts[0] });
      assert.strictEqual(await getBalance(), "0");
    });
  });

  //test get players function
  describe("getPlayers()", () => {
    it("Should be zero.", async () => {
      const players = await raffle.getPlayers();
      assert.strictEqual(players.length, 0);
    });
  });
});
