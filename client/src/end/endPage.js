import React, { useState, useEffect } from "react";
import PlayerCard from "./playerCard";

export default function EndPage(props) {
  function back() {
    props.socket.emit("leave_room", props.room.roomCode, props.playerId);
    props.setDisplay("HomePage");
  }

  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-center justify-center gap-20 align-middle">
      <div className="grid">
        <p className="text-center text-neutral">Salon</p>
        <h1 className="text-6xl font-bold text-error">{props.room.roomCode}</h1>
      </div>
      {props.room.players.forEach((player) => {
        <PlayerCard player={player} />;
      })}

      <div className="flex flex-col gap-3">
        <button className="btn btn-link" onClick={back}>
          Retour au menu principal
        </button>
      </div>
    </div>
  );
}
