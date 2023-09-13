// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

interface IPokeNFT {
    function safeMint(address to, uint256 tokenId) external;
}
