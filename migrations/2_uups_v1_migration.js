const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const MyToken = artifacts.require("MyToken");

module.exports = async function (deployer) {
    await deployProxy(MyToken, { kind: "uups", deployer });
};
