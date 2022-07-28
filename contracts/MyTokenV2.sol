// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./MyToken.sol";

contract MyTokenV2 is MyToken {
    function hello() public pure returns (string memory) {
        return 'hello';
    }
}