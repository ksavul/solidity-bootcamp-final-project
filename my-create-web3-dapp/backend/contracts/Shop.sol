// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "./interfaces/IPokeNFT.sol";
import "./interfaces/IPokeToken.sol";

contract Shop {
    IPokeToken public pokeToken;
    IPokeNFT public pokeNft;
    uint256 private ratio;
    uint256 private nftPrize;
    uint256 private index;

    constructor(
        address _pokeToken,
        address _pokeNft,
        uint256 _ratio,
        uint256 _nftPrize
    ) {
        pokeToken = IPokeToken(_pokeToken);
        pokeNft = IPokeNFT(_pokeNft);
        ratio = _ratio;
        nftPrize = _nftPrize;
    }

    function buyTokenDigitalWithEther() public payable {
        require(msg.value > 0, "Ether amount must be greater than 0");
        uint256 tokenAmount = msg.value * ratio;

        pokeToken.mint(msg.sender, tokenAmount);
    }

    function buyNFTWithToken() public {
        require(
            pokeToken.transfer(address(this), nftPrize),
            "Not enough tokens"
        );

        pokeNft.safeMint(msg.sender, index);
        index++;
    }

    function getNftPrize() public view returns (uint256) {
        return nftPrize;
    }
}
