import React from "react";

function Square({ updateGrid, firstIndex, secondIndex, value, turn }) {
  return (
    <div className="block" onClick={() => updateGrid(firstIndex, secondIndex, turn)}>
      {value}
    </div>
  );
}

export default Square;
