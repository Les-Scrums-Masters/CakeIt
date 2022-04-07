import React, { useState, useEffect } from "react";
import LobbyPlayerList from "./playerList";

export default function RoomLobby(props) {
  let [players, setPlayers] = useState(props.room.players);

  useEffect(() => {
    props.socket.on("refresh_players", (list) => {
      console.log(list);
      setPlayers(list);
    });
    props.socket.on("game_started", () => {
      console.log("Game started ...");
      props.setDisplay("GamePage");
    });

    // setNewPlayer(false);
  }, [props.socket, players, props]);

  function startGame() {
    //if (props.room.players.length >= 2) {
    if (props.room.players.length >= 1) {
      console.log("starting : " + props.room.roomCode);
      props.socket.emit("start_game", props.room.roomCode);
    } else {
      //avert : pas assez de joueur
    }
  }

  function back() {
    props.socket.emit("leave_room", props.room.roomCode, props.playerId);
    props.setDisplay("HomePage");
  }

  let btnStart = null;
  if (props.room.players[0].id === props.playerId) {
    btnStart = (
      <button className="btn btn-success" onClick={startGame}>
        Commencer la partie
      </button>
    );
  }

  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-center justify-center gap-20 align-middle">
      <div className="grid">
        <p className="text-center text-neutral">Salon</p>
        <h1 className="text-6xl font-bold text-error">{props.room.roomCode}</h1>
      </div>
      <LobbyPlayerList players={players} />
      {btnStart}
      <div className="flex flex-col gap-3">
        <button className="btn btn-link" onClick={back}>
          Retour
        </button>
      </div>
    </div>
  );
}
