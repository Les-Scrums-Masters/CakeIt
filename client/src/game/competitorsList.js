import { useState } from "react";
import Panel from "../components/panel";
import CompetitorItem from "./competitorItem";

export default function CompetitorsList(props) {

  const [competitors, setCompetitors] = useState([]);

  useState(()=> {
    
    props.socket.on("refresh_players", (players) => setCompetitors(players))

  });

  return (
    <Panel title="Concurrents" color="error">
      <div className="flex flex-col gap-3 divide-y-2 divide-error">

        {competitors.map((item, index) => <CompetitorItem name={item.name} status={item.status} price={item.price} money={item.money} key={index} />)}

      </div>
    </Panel>
  );
}
