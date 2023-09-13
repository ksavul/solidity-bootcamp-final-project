// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IPokeNFT.sol";
import "./interfaces/IPokeToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is Ownable {
    IPokeNFT public nft;
    IPokeToken public token;

    struct NFTListing {
        address seller;
        uint256 tokenId;
        uint256 price;
        bool isSold;
    }

    NFTListing[] public listings;
    mapping(uint256 => NFTListing) nftListings;

    constructor(address _nftContractAddress, address _tokenDigitalAddress) {
        nft = IPokeNFT(_nftContractAddress);
        token = IPokeToken(_tokenDigitalAddress);
    }

    function createListing(uint256 tokenId, uint256 price) public {
        require(nft.ownerOf(tokenId) == msg.sender, "You don't own this NFT");
        require(price > 0, "Price must be greater than 0");

        NFTListing memory newListing = NFTListing({
            seller: msg.sender,
            tokenId: tokenId,
            price: price,
            isSold: false
        });

        nft.approve(address(this), tokenId);
        nftListings[tokenId] = newListing;
        listings.push(newListing);
    }

    function cancelListing(uint256 tokenId) public {
        NFTListing memory item = nftListings[tokenId];
        require(item.price > 0, "Not listed");

        NFTListing memory newListing = NFTListing({
            seller: address(0),
            tokenId: 0,
            price: 0,
            isSold: false
        });

        nftListings[tokenId] = newListing;
    }

    function buyListing(uint256 tokenId) public {
        NFTListing memory item = nftListings[tokenId];
        require(item.price > 0, "Not listed");

        require(
            token.transfer(item.seller, item.price),
            "Token transfer failed"
        );

        item.isSold = true;
        nft.transferFrom(item.seller, msg.sender, item.tokenId);
    }

    function withdrawToken() public onlyOwner {
        require(
            token.transfer(owner(), address(this).balance),
            "Token transfer failed"
        );
    }

    function getListing() external view returns (NFTListing[] memory) {
        return listings;
    }
}
