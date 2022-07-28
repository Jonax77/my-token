const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const MyTokenTransparent = artifacts.require("MyTokenTransparent");

module.exports = async function (deployer) {
    await deployProxy(MyTokenTransparent, { kind: "transparent", deployer });
};
