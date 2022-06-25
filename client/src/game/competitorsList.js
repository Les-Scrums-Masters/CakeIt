import Panel from "../components/panel";
import CompetitorItem from "./competitorItem";

export default function CompetitorsList(props) {
  return (
    <Panel title="Concurrents" color="error">
      <div className="flex flex-col gap-3 divide-y-2 divide-error">
        {props.players.map((item, index) => {
          if (item.id !== props.player.id) {
            console.log(item);
            return <CompetitorItem player={item} key={index}></CompetitorItem>;
          } else {
            return "";
          }
        })}
      </div>
    </Panel>
  );
}
