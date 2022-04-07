import BakerInfo from "./bakerInfo";
import React, { useEffect, useState } from "react";
import CompetitorsList from "./competitorsList";
import NewsList from "./newsList";
import GameContent from "./gameContent";
import IngredientList from "./ingredientList";

/* PROPS : 
        socket={socket}
        room={room}
        playerId={playerId}
        showNews={showNewsModal}
*/

export default function GamePage(props) {
  const [round, setRound] = useState(1);
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState(null);

  const [ingredients, setIngredients] = useState({});

  const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  useEffect(() => {
    props.socket.on("next_day", (round) => setRound(round));
    props.socket.on("refresh_players", (p) => {
      setPlayers(p);
    });
    props.socket.on("send_player_info", (player) => {
      setPlayer(player);
    });
    props.socket.on("update_ingredients", (data) => {
      setIngredients(data);
    });
  }, [props.socket, props.playerId]);

  const getDate = () => {
    return makeDate(round);
  };

  const makeDate = (round) => {
    let initialDate = Date.now();
    let result = new Date(initialDate);
    result.setDate(result.getDate() + round);

    // FORMATTAGE
    return dateFormatter.format(result);
  };

  if (player === undefined || player == null || players == null) {
    return <div className=""></div>;
  } else {
    return (
      <div className="mx-auto flex h-full w-full flex-col items-stretch justify-center gap-5 p-20 align-middle lg:flex-row">
        <NewsList
          socket={props.socket}
          makeDate={makeDate}
          showModal={props.showModal}
        />

        <div className="flex grow flex-col gap-5">
          <BakerInfo date={getDate()} player={player} />

          <GameContent
            ingredients={ingredients}
            socket={props.socket}
            player={player}
            roomCode={props.room.roomCode}
          />
        </div>

        <div className="grid grid-rows-2 gap-3">
          <CompetitorsList players={players} player={player} />

          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    );
  }
}
