import { useEffect, useState } from "react";
import Chart from "../charts/chart";
import Slider from "../components/slider";
import IngredientItem from "./ingredientItem";
import ValueDisplay from "./valueDisplay";

/* PROPS : 
            socket={props.socket}
            player={player}
            roomCode={props.room.roomCode}
*/
export default function GameContent(props) {
  const [isReport, setIsReport] = useState(true);

  const [production, setProduction] = useState(5);
  const [price, setPrice] = useState(5);

  const [ingredients, setIngredients] = useState({});

  const ready = () => {
    let data = {
      price: price,
      production: production,
    };
    props.socket.emit("end_day", data, props.roomCode, props.player);
  };

  useEffect(() => {
    props.socket.on("next_day", () => {
      setIsReport(false);
    });
    props.socket.on("end_day", () => {
      setIsReport(true);
    });
    props.socket.on("update_ingredients", (data) => {
      setIngredients(data);
    });
  });

  let volumes = props.player.volume.values;
  let prices = props.player.volume.values;

  let lastVolume = 0;
  let lastPrice = 0;

  if (prices.length > 0) lastPrice = prices[prices.length - 1];
  if (volumes.length > 0) lastVolume = volumes[volumes.length - 1];

  let content;
  let values = [];

  values.push(
    <ValueDisplay
      value={lastVolume}
      legend="gateaux initialement produits"
      key="volume"
    />
  );

  values.push(
    <ValueDisplay
      value={lastPrice}
      legend="prix de vente d'un gateau"
      suffix=" €"
      key="price"
    />
  );

  if (isReport) {
    content = (
      <div className="divide grid flex-1 grid-cols-3 items-stretch gap-4 divide-x">
        <div className="col-span-2 row-span-3 h-full">
          {Object.keys(ingredients).length == 5 ? (
            <Chart ingredients={ingredients} />
          ) : (
            ""
          )}
        </div>
        <div className="row-span-2 flex flex-col pl-3 align-middle">
          <h3 className="text-2xl font-bold text-success">
            Coût des ingrédients
          </h3>

          {Object.values(ingredients).map((item) => {
            let price = 0;
            let evolution = 0;

            return (
              <IngredientItem
                name={item.name}
                price={price}
                evolution={evolution}
              />
            );
          })}

          <h3 className="text-2xl font-bold text-success">
            Ajustez votre production
          </h3>

          <Slider
            min={1}
            max={15}
            step={0.1}
            value={price}
            caption="Prix"
            suffix=" €"
            onChange={(v) => setPrice(v)}
          />
          <Slider
            min={0}
            max={1000}
            step={1}
            value={production}
            caption="Quantité"
            onChange={(v) => setProduction(v)}
          />
        </div>
        <div className="flex place-items-end justify-end">
          <button className="btn btn-success" onClick={ready}>
            Valider
          </button>
        </div>
      </div>
    );

    let sales = props.player.sales.values;
    let profit = props.player.profit.values;

    let lastSales = 0,
      lastProfit = 0;
    if (sales.length > 0) lastSales = sales[sales.length - 1];
    if (profit.length > 0) lastProfit = profit[profit.length - 1];

    values.push(
      <div className="rounded-xl bg-success p-3" key="sales">
        <ValueDisplay value={lastSales} legend="gateaux vendus" suffix=" €" />
      </div>
    );

    values.push(
      <div className="rounded-xl bg-success p-3" key="profit">
        <ValueDisplay value={lastProfit} legend="profit" suffix=" €" />
      </div>
    );
  } else {
    content = "Vente ...";
  }

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-xl border-2 border-success bg-white p-8">
      <h1 className="text-4xl font-bold text-success">
        {isReport ? "Bilan" : "Vente en cours ..."}
      </h1>

      <div className="flex flex-row text-success">{values}</div>

      {content}
    </div>
  );
}
