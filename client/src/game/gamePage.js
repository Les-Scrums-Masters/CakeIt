import BakerInfo from "./bakerInfo";
import React, { useRef, useState, useEffect } from "react";
import CompetitorsList from "./competitorsList";
import NewsList from "./newsList";
import ValueDisplay from "./valueDisplay";

export default function GamePage(props) {
  useEffect(() => {
    props.socket.on("next_day", (roundData) => {});
  }, [props.socket]);

  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 py-20 align-middle lg:flex-row">
      <NewsList />

      <div className="flex grow flex-col gap-5">
        <BakerInfo date="dimanche 28 janvier" name="Eren" money={20393} />

        <div className="flex h-full w-full flex-col gap-5 rounded-xl border-2 border-success bg-white p-8">
          <h1 className="text-4xl font-bold text-success">Action</h1>

          <div className="flex flex-row text-success">
            <ValueDisplay value="2240" legend="gateaux en rayon" />
            <ValueDisplay value="10.3 €" legend="prix de vente" />
          </div>

          <p>...</p>
        </div>
      </div>

      <CompetitorsList />
    </div>
  );
}
