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
      evolution={props.player.volumeEvolution}
    />
  );

  values.push(
    <ValueDisplay
      value={lastPrice}
      legend="prix de vente d'un gateau"
      suffix=" €"
      key="price"
      evolution={props.player.priceEvolution}
    />
  );

  if (isReport) {
    content = (
      <div className="grid w-full grid-cols-3 items-stretch gap-4">
        <div className="col-span-2 row-span-3 h-full">
          {Object.keys(props.ingredients).length === 5 ? (
            <Chart ingredients={props.ingredients} />
          ) : (
            ""
          )}
        </div>
        <div className="row-span-2 flex flex-col place-self-stretch rounded-xl border-2 border-success py-5 px-5 align-middle">
          <h3 className="text-xl font-bold text-success">
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
      <div className="rounded-xl bg-success py-3 px-5 text-white" key="sales">
        <ValueDisplay
          value={lastSales}
          legend="gateaux vendus"
          suffix=" €"
          evolution={props.player.salesEvolution}
        />
      </div>
    );

    values.push(
      <div className="rounded-xl bg-success py-3 px-5 text-white" key="profit">
        <ValueDisplay
          value={lastProfit}
          legend="profit"
          suffix=" €"
          evolution={props.player.profitEvolution}
        />
      </div>
    );
  } else {
    content = (
      <div className="my-auto h-64 grow justify-center text-center">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_Q18RwS.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-xl border-2 border-success bg-white p-8">
      <h1 className="text-4xl font-bold text-success">
        {isReport ? "Bilan" : "Ventes en cours ..."}
      </h1>

      <div className="grid grid-cols-4 items-center gap-3 text-success">
        {values}
      </div>

      <div className="grid grow">{content}</div>
    </div>
  );
}
