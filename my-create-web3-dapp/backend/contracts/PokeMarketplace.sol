// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IPokeNFT.sol";
import "./interfaces/IPokeToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PokeMarketplace is Ownable {
    IPokeNFT public nft;
    IPokeToken public token;
    uint256 private constant MAX_TOKENS = 160;

    struct NFTListing {
        address seller;
        uint256 tokenId;
        uint256 price;
        bool listed;
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
        require(
            nft.getApproved(tokenId) == address(this),
            "Approve this contract"
        );

        NFTListing memory newListing = NFTListing({
            seller: msg.sender,
            tokenId: tokenId,
            price: price,
            listed: true
        });

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
            listed: false
        });

        nftListings[tokenId] = newListing;
    }

    function buyListing(uint256 tokenId) public {
        NFTListing memory item = nftListings[tokenId];
        require(item.price > 0, "Not listed");

        require(
            token.transferFrom(msg.sender, item.seller, item.price),
            "Token transfer failed"
        );

        NFTListing memory update = NFTListing({
            seller: item.seller,
            tokenId: item.tokenId,
            price: item.price,
            listed: false
        });

        nftListings[tokenId] = update;

        nft.transferFrom(item.seller, msg.sender, item.tokenId);
    }

    function withdrawToken() public onlyOwner {
        require(
            token.transfer(owner(), address(this).balance),
            "Token transfer failed"
        );
    }

    function getAllNFTs() public view returns (NFTListing[] memory) {
        NFTListing[] memory tokens = new NFTListing[](MAX_TOKENS);
        uint currentIndex = 0;

        for (uint i = 0; i < MAX_TOKENS; i++) {
            if (nftListings[i].listed) {
                tokens[currentIndex] = nftListings[i];
                currentIndex++;
            }
        }

        return tokens;
    }
}
