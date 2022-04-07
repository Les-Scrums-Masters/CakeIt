import BakerInfo from "./bakerInfo";
import React, { useEffect } from "react";
import CompetitorsList from "./competitorsList";
import NewsList from "./newsList";
import ValueDisplay from "./valueDisplay";
import Chart from "./../charts/chart";

export default function GamePage(props) {
  let myRoundData = [];
  useEffect(() => {
    props.socket.on("next_day", (roundData) => {
      myRoundData = roundData;
    });
  }, [props.socket]);

  return (
    <div className="mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 py-20 align-middle lg:flex-row">
      <NewsList socket={props.socket} />

      <div className="flex grow flex-col gap-5">
        <BakerInfo date="dimanche 28 janvier" name="Eren" money={20393} socket={props.socket} />

        <div className="flex h-full w-full flex-col gap-5 rounded-xl border-2 border-success bg-white p-8">
          <h1 className="text-4xl font-bold text-success">Action</h1>

          <div className="flex flex-row text-success">
            <ValueDisplay value="2240" legend="gateaux en rayon" />
            <ValueDisplay value="10.3 €" legend="prix de vente" />
          </div>

          <p>
            <Chart data={myRoundData} />
          </p>
        </div>
      </div>

      <CompetitorsList socket={props.socket}/>
    </div>
  );
}
