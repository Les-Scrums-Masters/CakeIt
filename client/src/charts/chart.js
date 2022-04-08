import { VictoryChart, VictoryLine, VictoryLabel } from "victory";
import React, { useState } from "react";

function Chart(props) {
  const convertToChart = (values) => {
    let result = [];
    let x = 1;
    values.forEach((value) => {
      let item = { x: x, y: value };
      result.push(item);
      x++;
    });
    return result;
  };

  let names = {
    egg: "Oeufs",
    chocolate: "Chocolat",
    flour: "Farine",
    sugar: "Sucre",
    butter: "Beurre",
  };
  const [selected, setSelected] = useState(Object.keys(props.ingredients)[0]);

  let values = props.ingredients[selected].price.values ?? [];
  console.log(values);
  let max = Math.max(...values);

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
    <div className="h-full">
      <VictoryChart height={200} width={800}>
        <VictoryLabel x={20} y={20} style={title} text={names[selected]} />
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
          data={convertToChart(values)}
          domain={{
            x: [1, values.length],
            y: [0, max],
          }}
        />
      </VictoryChart>
      <div class="btn-group">
        {Object.keys(names).map((key) => {
          let cssclasses =
            selected === key ? "ingredients btn btn-active" : "ingredients btn";
          return (
            <button class={cssclasses} onClick={() => setSelected(key)}>
              {names[key]}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Chart;
