const RecordHighScore = artifacts.require("RecordHighScore");

module.exports = function (deployer) {
  deployer.deploy(RecordHighScores);
};
