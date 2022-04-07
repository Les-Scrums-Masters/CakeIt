import Panel from "../components/panel";
import CompetitorItem from "./competitorItem";

export default function CompetitorsList(props) {
  return (
    <Panel title="Concurrents" color="error">
      <div className="flex flex-col gap-3 divide-y-2 divide-error">
        {props.players.map((item, index) => {
          console.log(
            "item competitor : " + item.id + " player " + props.player.id
          );

          if (item.id !== props.player.id) {
            let price = 0;
            let money = 0;

            if (item.money.values.length > 0)
              money = item.money.values[item.money.values.length - 1];
            if (item.price.values.length > 0)
              price = item.price.values[item.price.values.length - 1];

            return (
              <CompetitorItem
                name={item.name}
                status={item.status}
                price={price + " €"}
                money={money + " €"}
                key={index}
              />
            );
          } else {
            return "";
          }
        })}
      </div>
    </Panel>
  );
}
