async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Recorder = await ethers.getContractFactory("HighScoreRecorder");
    const recorder = await Recorder.deploy();

    console.log("RecordHighScore address:", recorder.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });