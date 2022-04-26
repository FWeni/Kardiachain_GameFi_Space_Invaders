// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract RecordHighScore {
  string username;
  uint record;

  function setCurrentPlayer(string memory _username) public {
    username = _username;
  }

  function getCurrentPlayer() public view returns (string memory) {
      return username;
  }

  function setNewRecord(uint _record) public {
    record = _record;
  }

  function getNewRecord() public view returns (uint) {
      return record;
  }
}