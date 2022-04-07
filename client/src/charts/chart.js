import { VictoryChart, VictoryLine, VictoryLabel } from "victory";
import React, { useState } from "react";

function Chart(props) {
  let dataChocolat = props.data.chocolate;
  let dataOeuf = props.data.egg;
  let dataBeurre = props.data.butter;
  let dataFarine = props.data.flour;
  let dataSucre = props.data.sugar;

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

  let max = 0;
  currentData.forEach((element) => {
    if (element.y > max) max = element.y;
  });

  //a refaire ??
  const title = {
    textAnchor: "start",
    verticalAnchor: "end",
    fill: "#36D399",
    fontFamily: "Lexend Deca",
    fontSize: "22px",
    fontWeight: "bold",
  };
  const labelOne = {
    fill: "#291334",
    fontFamily: "Lexend Deca",
    fontSize: 12,
    fontStyle: "italic",
  };

  // const parent = {
  //   background: "#E5E5E5",
  //   boxSizing: "border-box",
  //   display: "inline",
  //   padding: 0,
  //   fontFamily: "'Fira Sans', sans-serif",
  // };

  return (
    <div className="h-6/12 container mx-auto w-6/12">
      <VictoryChart height={200} width={800}>
        <VictoryLabel x={20} y={20} style={title} text={selected} />
        <VictoryLabel x={20} y={33} style={labelOne} text={"Prix (en €)"} />
        <VictoryLabel
          x={500}
          y={185}
          style={labelOne}
          text={"Temps (en tour)"}
        />
        <VictoryLine
          style={{
            data: { stroke: "#F87272" },
            parent: { border: "1px solid #ccc" },
          }}
          data={currentData}
          domain={{
            x: [1, currentData.length],
            y: [0, max],
          }}
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
