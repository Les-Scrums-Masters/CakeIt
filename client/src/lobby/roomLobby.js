import React, { useState, useEffect } from "react";
import LobbyPlayerList from "./playerList";

export default function RoomLobby(props) {
  const [newPlayer, setNewPlayer] = useState(false);

  useEffect(() => {
    props.socket.on("room_joined", (room) => {
      setNewPlayer(true);
    });
    setNewPlayer(false);
  }, [props.socket]);

  function startGame() {
    alert("Commencer la partie");
  }

  function back() {
    alert("Quitter");
  }

  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-center justify-center gap-20 align-middle">
      <div className="grid">
        <p className="text-center text-neutral">Salon</p>
        <h1 className="text-6xl font-bold text-error">{props.room.roomCode}</h1>
      </div>

      <LobbyPlayerList players={props.room.players} />

      <div className="flex flex-col gap-3">
        <button className="btn btn-success" onClick={startGame}>
          Commencer la partie
        </button>

        <button className="btn btn-link" onClick={back}>
          Retour
        </button>
      </div>
    </div>
  );
}
