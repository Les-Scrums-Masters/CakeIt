import { VictoryChart, VictoryLine, VictoryLabel } from "victory";
import React, { useState } from "react";

function EndChart(props) {
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

  const [selected, setSelected] = useState(0);

  let values = props.players[selected].money.values ?? [];
  let max = Math.max(...values);

  const title = {
    textAnchor: "start",
    verticalAnchor: "end",
    fill: "#36D399",
    fontFamily: "Lexend",
    fontSize: "22px",
    fontWeight: "bold",
  };
  const labelOne = {
    fill: "#291334",
    fontFamily: "Lexend",
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
    <div className="h-3/4">
      <VictoryChart height={200} width={800}>
        <VictoryLabel
          x={20}
          y={20}
          style={title}
          text={props.players[selected].name}
        />
        <VictoryLabel x={20} y={33} style={labelOne} text={"Trésorerie"} />
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
      <div className="btn-group">
        {props.players.map((player, index) => {
          let cssclasses =
            selected === index ? "btn btn-success" : "btn btn-accent ";
          return (
            <button
              className={cssclasses}
              onClick={() => setSelected(index)}
              key={index}
            >
              {player.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default EndChart;
