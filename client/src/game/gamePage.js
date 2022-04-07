import BakerInfo from "./bakerInfo";
import React, { useEffect, useState } from "react";
import CompetitorsList from "./competitorsList";
import NewsList from "./newsList";
import GameContent from "./gameContent";

export default function GamePage(props) {
  const findPlayer = (playerId, players) => {
    players.forEach((p) => {
      if (p.id == playerId) {
        setPlayer(p);
      }
    });
    return null;
  };

  const [player, setPlayer] = useState({});
  const [round, setRound] = useState(0);

  useEffect(() => {
    if (player === {}) {
      findPlayer(props.playerId, props.room.players);
    }
    props.socket.on("next_day", (round) => setRound(round));
    props.socket.on("refresh_players", (players) =>
      findPlayer(props.playerId, players)
    );
  }, [props.socket, props.playerId, player, props.room.players]);

  const getDate = () => {
    return makeDate(round);
  };

  const makeDate = (round) => {
    return 0;
  };

  if (player === null) {
    return (
      <div className="mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 py-20 align-middle lg:flex-row"></div>
    );
  } else {
    return (
      <div className="flex h-full w-full flex-col items-stretch justify-center gap-5 p-20 align-middle lg:flex-row">
        <NewsList
          socket={props.socket}
          makeDate={makeDate}
          showNews={props.showNews}
        />

        <div className="flex grow flex-col gap-5">
          <BakerInfo date={getDate()} name={player.name} money={player.money} />

          <GameContent socket={props.socket} player={player} />
        </div>

        <CompetitorsList socket={props.socket} />
      </div>
    );
  }
}
