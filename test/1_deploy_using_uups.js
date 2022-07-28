const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const MyToken = artifacts.require("MyToken");
const MyTokenV2 = artifacts.require("MyTokenV2");
const MyTokenTransparent = artifacts.require("MyTokenTransparent");

describe("upgrades", () => {
    it("works", async () => {
        const myTT = await deployProxy(MyTokenTransparent, {
            kind: "transparent",
        });

        const name = await myTT.name();
        assert.equal(name.toString(), "MyTokenTransparent");
    });
});
