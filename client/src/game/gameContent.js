import { useEffect, useState } from "react";
import Chart from "../charts/chart";
import ValueDisplay from "./valueDisplay";

export default function GameContent(props) {
  const [isReport, setIsReport] = useState(false);

  useEffect(() => {
    props.socket.on("next_day", () => {});
    props.socket.on("end_day", () => {});
  });

  let volumes = props.player.volume.values;
  let prices = props.player.volume.values;

  let lastVolume = 0;
  let lastPrice = 0;

  if (prices.length > 0) lastPrice = prices[prices.length - 1];
  if (volumes.length > 0) lastVolume = volumes[volumes.length - 1];

  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-xl border-2 border-success bg-white p-8">
      <h1 className="text-4xl font-bold text-success">
        {isReport ? "Bilan" : "Vente en cours ..."}
      </h1>

      <div className="flex flex-row text-success">
        <ValueDisplay value={lastVolume} legend="gateaux en rayon" />
        <ValueDisplay value={lastPrice} legend="prix de vente" />
      </div>

      <p></p>
    </div>
  );
}
