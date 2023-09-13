
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
        instance = await shopFactory.deploy(tokenAddress, nftAddress, 1000, 10);

            
        


    })

    describe("Deployment", function () {
        it("Should get token address", async function () {
           expect(await instance.pokeToken()).to.equal(token.target);

        });

        it("Should get nft address", async function () {
            expect(await instance.pokeNft()).to.equal(nft.target);
 
        
        });

        it("Should get nft prize", async function () {
            expect(await instance.getNftPrize()).to.equal(10);
 
         });

        it

    })

    describe("Shopping", function () {

        it("Should buy token", async function () {
            const id = 10;
            await nft.addShop(instance.target);

            await instance.buyTokenDigitalWithEther({value: 1});

 
         });
 
             




       

    });


});


//Anotaciones: testear que un usuario con nfts pero que no es participante no participa