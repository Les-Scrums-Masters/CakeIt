import React, { useState, useEffect } from "react";
import EndPlayerList from "./endPlayerList";

export default function EndPage(props) {
  function back() {
    props.socket.emit("leave_room", props.room.roomCode, props.playerId);
    props.setDisplay("HomePage");
  }

  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-center justify-center gap-20 align-middle">
      <div className="grid">
        <h1 className="text-6xl font-bold text-error">Bien joué !</h1>
      </div>
      {console.log(props.room.players)}
      <EndPlayerList players={props.room.players} />

      <div className="flex flex-col gap-3">
        <button className="btn btn-link" onClick={back}>
          Retour au menu principal
        </button>
      </div>
    </div>
  );
}
