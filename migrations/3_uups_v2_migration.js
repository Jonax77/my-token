const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const MyToken = artifacts.require("MyToken");
const MyTokenV2 = artifacts.require("MyTokenV2");

module.exports = async function (deployer) {
    const existing = await MyToken.deployed();
    await upgradeProxy(existing.address, MyTokenV2, { kind: "uups", deployer });
};
