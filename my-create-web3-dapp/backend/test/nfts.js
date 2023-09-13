
const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");



describe("NFT contract", function () {


    beforeEach(async function () {
        instance = await ethers.getContractFactory("PokNFT");
        [owner, user1, user2] = await ethers.getSigners();
        token = await instance.deploy();

    })

    describe("Deployment", function () {
        it("Should assing owner", async function () {
            expect(await token.owner()).to.equal(owner.address);

        });

        it("Should assing base uri", async function () {
            await token.safeMint(user1.address, 160);
            console.log(await token.tokenURI(160))
            expect(await token.tokenURI(160)).to.equal("https://images.pokemontcg.io/swsh12pt5/160.png");

        });



       

    });


});


//Anotaciones: testear que un usuario con tokens pero que no es participante no participa