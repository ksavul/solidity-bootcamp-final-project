
const { expect } = require("chai");
const { ethers, upgrades, userConfig } = require("hardhat");



describe("Shop contract", function () {


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

            
        


    })

    describe("Deployment", function () {
        it("Should get token address", async function () {
           expect(await instance.pokeToken()).to.equal(token.target);

        });

        it("Should get nft address", async function () {
            expect(await instance.pokeNft()).to.equal(nft.target);
 
        
        });

        it("Should get nft prize", async function () {
            expect(await instance.getNftPrize()).equal(1);
 
         });

        it

    })

    describe("Shopping", function () {

        it("Should buy token", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 1});

            expect(await token.balanceOf(owner.address)).to.equal(1000);

 
         });

         it("Should buy nft", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 100});
            await token.approve(instance.target, 10000);
            await instance.buyNFTWithToken();
            expect(await nft.balanceOf(owner.address)).to.equal(1)

 
         });

         it("Should buy nft", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 100});
            await token.approve(instance.target, 10000);
            await instance.buyNFTWithToken();
            const array = await instance.mintedTokens();
            const index = array[0];
            expect(await nft.ownerOf(index)).to.equal(owner.address)

 
         });

         it("Should not buy if does not have tokens", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await token.approve(instance.target, 10000);
            await expect(instance.buyNFTWithToken()).to.reverted;

 
         });


         it("Should buy some nfts", async function () {
            const id = 10;
            await token.addShop(instance.target);
            await nft.addShop(instance.target);

            await instance.connect(user1).buyTokenDigitalWithEther({value: 100});
            await token.connect(user1).approve(instance.target, 10000);
            await instance.connect(user1).buyNFTWithToken();
            await instance.connect(user1).buyNFTWithToken();
            await instance.connect(user1).buyNFTWithToken();
            await instance.connect(user1).buyNFTWithToken();
            await instance.connect(user1).buyNFTWithToken();
            await instance.connect(user1).buyNFTWithToken();
            expect(await nft.balanceOf(user1.address)).to.equal(6)

 
         });



 
             




       

    });


});


//Anotaciones: testear que un usuario con nfts pero que no es participante no participa