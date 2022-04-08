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
  const [news, setNews] = useState([]);

  useEffect(() => {
    props.socket.on("next_day", (round) => {
      setRound(round);
    });
    props.socket.on("refresh_players", (p) => {
      setPlayers(p);
    });
    props.socket.on("send_player_info", (player) => {
      setPlayer(player);
    });
    props.socket.on("update_ingredients", (data) => {
      setIngredients(data);
    });
    props.socket.on("new_news", (newsList) => {
      setNews(newsList);
      setTimeout(() => {
        console.log(newsList.length);
        props.showNews(newsList[newsList.length - 1]);
      }, 300);
    });
  }, [props.socket, props.playerId, news, props]);

  if (player === undefined || player == null || players == null) {
    return <div className=""></div>;
  } else {
    return (
      <div className="mx-auto grid h-full w-full flex-col items-stretch justify-center gap-5 overflow-auto p-20 align-middle 2xl:flex 2xl:flex-row">
        <div className="grid">
          <NewsList
            socket={props.socket}
            makeDate={props.makeDate}
            news={news}
          />
        </div>

        <div className="flex grow flex-col gap-5">
          <BakerInfo date={round} player={player} makeDate={props.makeDate} />

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
