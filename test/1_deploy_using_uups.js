const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const MyToken = artifacts.require("MyToken");
const MyTokenV2 = artifacts.require("MyTokenV2");

describe("upgrades", () => {
    it("works", async () => {
        const myToken = await deployProxy(MyToken, { kind: "uups" });
        // const myTokenV2 = await deployProxy(MyTokenV2, { kind: "uups" });
        const myTokenV2 = await upgradeProxy(myToken.address, MyTokenV2, {
            kind: "uups",
            // call: { fn: "rename", args: ["MyTokenV2", "MTK2"] },
        });

        const name = await myTokenV2.name();
        assert.equal(name.toString(), "hello");
    });
});
