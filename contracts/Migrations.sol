// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract RecordHighScore {
  string username;
  uint record;

  function setPlayer(string memory _username) public {
    username = _username;
  }

  function getPlayer() public view returns (string memory) {
      return username;
  }

  function setScore(uint _record) public {
    record = _record;
  }

  function getScore() public view returns (uint) {
      return record;
  }
}