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

export const checkIfMatch = (grid) => {
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
