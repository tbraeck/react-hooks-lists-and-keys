import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorCard = ColorList.map((color) => {
    return (
      <li style={{ color }}>{colors}</li>
    );
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorCard}
      </ol>
    </div>
  );
}

export default ColorList;
