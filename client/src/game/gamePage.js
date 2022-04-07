import BakerInfo from "./bakerInfo";
import React, { useEffect, useState } from "react";
import CompetitorsList from "./competitorsList";
import NewsList from "./newsList";
import GameContent from "./gameContent";

export default function GamePage(props) {
  const [round, setRound] = useState(0);
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    props.socket.on("next_day", (round) => setRound(round));
    props.socket.on("refresh_players", (p) => {
      console.log("REFRESH :");
      console.log(p);
      setPlayers(p);
    });
    props.socket.on("send_player_info", (player) => {
      console.log("MY PLAYER :");
      console.log(player);
      setPlayer(player);
    });
  }, [props.socket, props.playerId]);

  const getDate = () => {
    return makeDate(round);
  };

  const makeDate = (round) => {
    return 0;
  };

  if (player == undefined || player == null || players == null) {
    return (
      <div className="mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 py-20 align-middle lg:flex-row"></div>
    );
  } else {
    return (
      <div className="mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 py-20 align-middle lg:flex-row">
        <NewsList
          socket={props.socket}
          makeDate={makeDate}
          showNews={props.showNews}
        />

        <div className="flex grow flex-col gap-5">
          <BakerInfo date={getDate()} player={player} />

          <GameContent socket={props.socket} player={player} />
        </div>

        <CompetitorsList
          socket={props.socket}
          players={players}
          player={player}
        />
      </div>
    );
  }
}
