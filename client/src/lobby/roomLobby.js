import React, { useState } from "react";
import LobbyPlayerList from "./playerList";

export default function RoomLobby(props) {
  function startGame() {
    alert("Commencer la partie");
  }

  function back() {
    alert("Quitter");
  }

  let players = [

    {name: "Eren"},
    {name: "Derya"},
    {name: "Clément"},
    {name: "Franck"}

  ]

  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-center justify-center gap-20 align-middle">

        <div className="grid">
          <p className="text-neutral text-center">Salon</p>
          <h1 className="text-error text-6xl font-bold">{props.roomCode}</h1>
        </div>

        <LobbyPlayerList players={players} />

        <div className="flex flex-col gap-3">
          <button className="btn btn-success" onClick={startGame}>
              Commencer la partie
          </button>

          <button className="btn btn-link" onClick={back}>
            Retour
          </button>
        </div>

    </div>
  )
}
