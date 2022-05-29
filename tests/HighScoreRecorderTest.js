const { except } = require("chai");
const { ethers } = require("hardhat");

describe("HighScore Contract", function() {
    it("Deployment should store high score of the player", async function() {
        // const [player] = await ethers.getSigners();

        const HighScore = await ethers.getContractFactory("HighScoreRecorder");

        const hardhatRecorder = await HighScore.deploy();

        const playerScore = await hardhatRecorder.getNewRecord();
        expect(await hardhatRecorder.record()).to.equal(playerScore);
    })
})