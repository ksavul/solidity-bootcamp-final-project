
const { expect } = require("chai");
const { ethers, upgrades, userConfig } = require("hardhat");



describe("Marketplace contract", function () {


    beforeEach(async function () {
        [owner, user1, user2] = await ethers.getSigners();

        tokenFactory = await ethers.getContractFactory("PokeToken");
        token = await tokenFactory.deploy();

        nftFactory = await ethers.getContractFactory("PokeNFT");
        nft = await nftFactory.deploy();

        const tokenAddress = token.target;
        const nftAddress = nft.target;

        shopFactory = await ethers.getContractFactory("Shop");
        instance = await shopFactory.deploy(tokenAddress, nftAddress, 1000, 1);

        marketplaceFactory = await ethers.getContractFactory("PokeMarketplace");
        market = await marketplaceFactory.deploy(nftAddress, tokenAddress);

            
        


    })

    describe("Deployment", function () {
        it("Should set right owner", async function () {
           expect(await market.owner()).to.equal(owner.address);

        });


    })

    describe("Marketplace", function () {

         it("Should list token", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 1});
            await token.approve(instance.target, 10000);
            await instance.buyNFTWithToken();
            
            const array = await instance.mintedTokens();
            const index = array[0];
            await nft.approve(market.target, index);
            await market.createListing(index, 100);

 
         });

         it("Should not let list token to a non owner", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 1});
            await token.approve(instance.target, 10000);
            await instance.buyNFTWithToken();
            
            const array = await instance.mintedTokens();
            const index = array[0];
            await nft.approve(market.target, index);
            await expect(market.connect(user1).createListing(index, 100)).to.reverted;
 
         });

         it("Should let buy listed token", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 1});
            await instance.connect(user1).buyTokenDigitalWithEther({value: 1});
            await token.approve(instance.target, 10000);
            await token.connect(user1).approve(market.target, 10000);
            await instance.buyNFTWithToken();
            
            const array = await instance.mintedTokens();
            const index = array[0];
            await nft.approve(market.target, index);
            await market.createListing(index, 100);
            await market.connect(user1).buyListing(index);
            expect(await nft.balanceOf(user1.address)).to.equal(1)
            expect(await nft.balanceOf(owner.address)).to.equal(0)
            expect(await nft.ownerOf(index)).to.equal(user1.address)
 
         });

         it("Should not let buy listed token if not enough tokens", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 1});
            await instance.connect(user1).buyTokenDigitalWithEther({value: 1});
            await token.approve(instance.target, 10000);
            await token.connect(user1).approve(market.target, 10000);
            await instance.buyNFTWithToken();
            
            const array = await instance.mintedTokens();
            const index = array[0];
            await nft.approve(market.target, index);
            await market.createListing(index, 2000);
            await expect(market.connect(user1).buyListing(1)).to.reverted;

 
         });

         it("Should not let buy listed token not listed", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 1});
            await instance.connect(user1).buyTokenDigitalWithEther({value: 1});
            await token.approve(instance.target, 10000);
            await token.connect(user1).approve(market.target, 10000);
            await instance.buyNFTWithToken();
            
            const array = await instance.mintedTokens();
            const index = array[0];
            await nft.approve(market.target, index);
           
            await expect(market.connect(user1).buyListing(index)).to.reverted;

 
         });

         it("Should cancel listed token", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 1});
            await instance.connect(user1).buyTokenDigitalWithEther({value: 1});
            await token.approve(instance.target, 10000);
            await token.connect(user1).approve(market.target, 10000);
            await instance.buyNFTWithToken();
            
            const array = await instance.mintedTokens();
            const index = array[0];
            await nft.approve(market.target,index);
            await market.createListing(index, 100);
            await market.cancelListing(index);
            await expect(market.connect(user1).buyListing(index)).to.reverted;
 
         });




         


 
             




       

    });


});


//Anotaciones: testear que un usuario con nfts pero que no es participante no participa