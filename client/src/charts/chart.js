import { VictoryChart, VictoryLine, VictoryLabel } from "victory";
import React, { useState } from "react";

function Chart() {
  let dataChocolat = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 3 },
    { x: 6, y: 0 },
    { x: 7, y: 0 },
    { x: 8, y: 1 },
  ];
  let dataOeuf = [
    { x: 1, y: 10 },
    { x: 2, y: 10 },
    { x: 3, y: 10 },
    { x: 4, y: 10 },
    { x: 5, y: 2 },
    { x: 6, y: 10 },
    { x: 7, y: 10 },
    { x: 8, y: 11 },
  ];
  let dataBeurre = [
    { x: 1, y: 20 },
    { x: 2, y: 20 },
    { x: 3, y: 20 },
    { x: 4, y: 23 },
    { x: 5, y: 20 },
    { x: 6, y: 20 },
    { x: 7, y: 20 },
    { x: 8, y: 21 },
  ];
  let dataFarine = [
    { x: 1, y: 30 },
    { x: 2, y: 30 },
    { x: 3, y: 30 },
    { x: 4, y: 30 },
    { x: 5, y: 30 },
    { x: 6, y: 10 },
    { x: 7, y: 30 },
    { x: 8, y: 31 },
  ];
  let dataSucre = [
    { x: 1, y: 40 },
    { x: 2, y: 40 },
    { x: 3, y: 40 },
    { x: 4, y: 40 },
    { x: 5, y: 0 },
    { x: 6, y: 40 },
    { x: 7, y: 40 },
    { x: 8, y: 41 },
  ];

  let ingredients = ["Chocolat", "Oeuf", "Farine", "Sucre", "Beurre"];
  const [selected, setSelected] = useState(ingredients[0]);

  let currentData;
  switch (selected) {
    case "Chocolat":
      currentData = dataChocolat;
      break;
    case "Oeuf":
      currentData = dataOeuf;
      break;
    case "Farine":
      currentData = dataFarine;
      break;
    case "Sucre":
      currentData = dataSucre;
      break;
    case "Beurre":
      currentData = dataBeurre;
      break;
    default:
      currentData = dataChocolat;
  }

  //a refaire ??
  const title = {
    textAnchor: "start",
    verticalAnchor: "end",
    fill: "#36D399",
    fontFamily: "Lexend Deca",
    fontSize: "22px",
    fontWeight: "bold",
  };

  return (
    <div className="container mx-auto">
      <VictoryChart>
        <VictoryLabel x={25} y={24} style={title} text={selected} />
        <VictoryLine
          style={{
            data: { stroke: "#F87272" },
            parent: { border: "1px solid #ccc" },
          }}
          data={currentData}
        />
      </VictoryChart>

      <div class="btn-group">
        {ingredients.map((ingredient) => {
          let cssclasses =
            selected === ingredient
              ? "ingredients btn btn-active"
              : "ingredients btn";
          return (
            <button class={cssclasses} onClick={() => setSelected(ingredient)}>
              {ingredient}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Chart;
