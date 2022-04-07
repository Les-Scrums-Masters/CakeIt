import BakerInfo from "./bakerInfo";
import React, { useEffect, useState } from "react";
import CompetitorsList from "./competitorsList";
import NewsList from "./newsList";
import GameContent from "./gameContent";
import Modal from "../components/modal.js";

export default function GamePage(props) {

  const findPlayer = (playerId, players) => {
    players.forEach((p) => {
      if (p.id === playerId) {
        return p;
      }
    });
    return null;
  }

  

  const [player, setPlayer] = useState(findPlayer(props.playerId, props.room.players));
  const [round, setRound] = useState(0);

  useEffect(() => {
    props.socket.on("next_day", (round) => setRound(round));
    props.socket.on("refresh_players", (players) => setPlayer(findPlayer(props.playerId, players)))

  }, [props.socket, props.playerId]);


  const getDate = () => {
    return makeDate(round);
  }

  const makeDate = (round) => {
    return 0;
  }

  return (
    <div className="mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 py-20 align-middle lg:flex-row">

      <NewsList socket={props.socket} makeDate={makeDate} />

      <div className="flex grow flex-col gap-5">
        <BakerInfo date={getDate()} name={player.name} money={player.money} />

        <GameContent socket={props.socket}/>
        
      </div>

      <CompetitorsList socket={props.socket}/>
    </div>
  );
}
