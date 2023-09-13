
const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");



describe("NFT contract", function () {


    beforeEach(async function () {
        [owner, user1, user2, shop] = await ethers.getSigners();

        nftFactory = await ethers.getContractFactory("PokeNFT");
        nft = await nftFactory.deploy();

        tokenFactory = await ethers.getContractFactory("PokeToken");
        token = await tokenFactory.deploy();

    })

    describe("Deployment", function () {
        it("Should assing owner", async function () {
            expect(await nft.owner()).to.equal(owner.address);

        });

        it("Should mint", async function () {
            const id = 10;
            await nft.safeMint(user1.address, id);

        });

        it("Should not let random address mint", async function () {
            const id = 10;
            await expect(nft.connect(user1).safeMint(user1.address, id)).to.reverted;

        });

        it("Should assing base uri", async function () {
            const id = 10;
            await nft.safeMint(user1.address, id);
        
            expect(await nft.tokenURI(id)).to.equal(`https://images.pokemontcg.io/swsh12pt5/${id}.png`);

        });


    })

    describe("Shop", function () {

        it("Should let assign shop", async function () {
            const id = 10;
            await nft.addShop(shop.address);
            await nft.connect(shop).safeMint(user1.address, 1);

        });

        it("Should not let mint another than shop", async function () {
            const id = 10;
            await nft.addShop(shop.address);
            await expect(nft.connect(user2).safeMint(user1.address, 1)).to.be.reverted;

        });

        it("Should nft be minted", async function () {
            const id = 10;
            await nft.addShop(shop.address);
            await nft.connect(shop).safeMint(user1.address, 1);
            expect(await nft.balanceOf(user1.address)).to.equal(1);
        });

        




       

    });


});


//Anotaciones: testear que un usuario con nfts pero que no es participante no participa