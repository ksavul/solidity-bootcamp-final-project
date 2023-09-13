// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

interface IPokeNFT {
    function safeMint(address to, uint256 tokenId) external;

    function ownerOf(uint256 tokenId) external view returns (address owner);

    function approve(address to, uint256 tokenId) external;

    function transferFrom(address from, address to, uint256 tokenId) external;

    function getApproved(
        uint256 tokenId
    ) external view returns (address operator);
}
