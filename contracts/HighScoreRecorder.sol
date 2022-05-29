// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract HighScoreRecorder {
  // address player;
  uint public record;

  // function setCurrentPlayer(address _player) public {
  //   player = _player;
  // }

  // function getCurrentPlayer() external view returns  (address) {
  //     return player;
  // }

  function setNewRecord(uint _record) public {
    record = _record;
  }

  function getNewRecord() external view returns (uint) {
      return record;
  }
}