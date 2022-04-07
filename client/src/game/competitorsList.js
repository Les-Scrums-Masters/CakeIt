import Panel from "../components/panel";
import CompetitorItem from "./competitorItem";
import NewsItem from "./newsItem";

export default function CompetitorsList(props) {

  let competitors = [

    {name: "derya", status: "ajuste sa production ...", price: "293 €", money: "29 €"},
    {name: "derya", status: "ajuste sa production ...", price: "293 €", money: "29 €"},

  ]

  return (
    <Panel title="Concurrents" color="error">
      <div className="flex flex-col gap-3 divide-y-2 divide-error">

        {competitors.map((item, index) => <CompetitorItem name={item.name} status={item.status} price={item.price} money={item.money} key={index} />)}

      </div>
    </Panel>
  );
}
