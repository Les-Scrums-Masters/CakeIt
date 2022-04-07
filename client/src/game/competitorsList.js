import { useEffect, useState } from "react";
import Panel from "../components/panel";
import CompetitorItem from "./competitorItem";

export default function CompetitorsList(props) {
  return (
    <Panel title="Concurrents" color="error">
      <div className="flex flex-col gap-3 divide-y-2 divide-error">
        {console.log(props.players)}
        {props.players.map((item, index) => {
          if (item.id != props.player.id) {
            {
              console.log(item);
              console.log("gooooooooooooood");
            }
            <CompetitorItem
              name={item.name}
              status={item.status}
              price={item.price}
              money={item.money.values[item.money.values.length - 1]}
              key={index}
            />;
          }
        })}
      </div>
    </Panel>
  );
}
