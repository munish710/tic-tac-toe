import React, { useState } from "react";
import Square from "./Square";

function Grid() {
  //[[0,0,0],[0,0,O],[x,0,0]]
  const [gridValue, setGridValue] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);

  const updateGrid = (firstIndex, secondIndex, value) => {
    if (winner || draw) {
      return;
    }
    const newGrid = [...gridValue];
    newGrid[firstIndex][secondIndex] = value;
    setGridValue(newGrid);
    const result = checkIfMatch(newGrid);
    if (result.match === true) {
      setWinner(result.char);
      console.log(winner);
    }
    checkDraw();
    //Update Turn
    turn === "X" ? setTurn("O") : setTurn("X");
  };

  const resetGrid = () => {
    setWinner("");
    setGridValue([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setTurn("X");
    setDraw(false);
  };

  const threePlaceCheck = (item1, item2, item3) => {
    //Check if they are not 0

    if (item1 === 0 || item2 === 0 || item3 === 0) {
      return {
        match: false,
      };
    }

    // Check if they match
    // if yes, return true and also the character
    if (item1 === item2 && item2 === item3) {
      return {
        match: true,
        char: item1,
      };
    }

    // if no, return false
    return {
      match: false,
    };
  };

  const checkIfMatch = (grid) => {
    var isMatched;
    // 00, 01, 02
    isMatched = threePlaceCheck(grid[0][0], grid[0][1], grid[0][2]);
    if (isMatched.match === true) {
      return isMatched;
    }
    //10, 11, 12
    isMatched = threePlaceCheck(grid[1][0], grid[1][1], grid[1][2]);
    if (isMatched.match === true) {
      return isMatched;
    }

    //20, 21, 22
    isMatched = threePlaceCheck(grid[2][0], grid[2][1], grid[2][2]);
    if (isMatched.match === true) {
      return isMatched;
    }

    // 00, 10,20
    isMatched = threePlaceCheck(grid[0][0], grid[1][0], grid[2][0]);
    if (isMatched.match === true) {
      return isMatched;
    }
    // 01, 11, 21
    isMatched = threePlaceCheck(grid[0][1], grid[1][1], grid[2][1]);
    if (isMatched.match === true) {
      return isMatched;
    }

    // 02, 12, 22
    isMatched = threePlaceCheck(grid[0][2], grid[1][2], grid[2][2]);
    if (isMatched.match === true) {
      return isMatched;
    }

    // 20, 11, 02
    isMatched = threePlaceCheck(grid[2][0], grid[1][1], grid[0][2]);
    if (isMatched.match === true) {
      return isMatched;
    }

    // 00, 11, 22
    isMatched = threePlaceCheck(grid[0][0], grid[1][1], grid[2][2]);
    if (isMatched.match === true) {
      return isMatched;
    }

    return false;
  };

  const checkDraw = () => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (gridValue[i][j] == 0) {
          count++;
        }
      }
    }
    if (count > 0) {
      setDraw(false);
    } else {
      setDraw(true);
    }
  };

  return (
    <div>
      <h2>{turn}'s Turn </h2>
      <button className="reset" onClick={() => resetGrid()}>
        RESET
      </button>

      <div className="outer">
        <div className="row">
          {gridValue[0].map((val, index) => {
            return (
              <Square
                key={"0" + index}
                updateGrid={updateGrid}
                firstIndex={0}
                secondIndex={index}
                value={val === 0 ? "" : val}
                turn={turn}
              />
            );
          })}
        </div>
        <div className="row">
          {gridValue[1].map((val, index) => {
            return (
              <Square
                key={"1" + index}
                updateGrid={updateGrid}
                firstIndex={1}
                secondIndex={index}
                value={val === 0 ? "" : val}
                turn={turn}
              />
            );
          })}
        </div>
        <div className="row">
          {gridValue[2].map((val, index) => {
            return (
              <Square
                key={"2" + index}
                updateGrid={updateGrid}
                firstIndex={2}
                secondIndex={index}
                value={val === 0 ? "" : val}
                turn={turn}
              />
            );
          })}
        </div>
      </div>
      {winner !== "" && <h3> Winner is {winner} !</h3>}
      {draw && <h3> It's a draw :/ </h3>}
    </div>
  );
}
export default Grid;
