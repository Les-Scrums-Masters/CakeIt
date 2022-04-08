import React, { useState, useEffect } from "react";
import LobbyPlayerList from "./playerList";
import Slider from "../components/slider.js";

export default function RoomLobby(props) {
  let [players, setPlayers] = useState(props.room.players);
  const [probaEvent, setProba] = useState(50);
  const [nbRounds, setRounds] = useState(5);

  useEffect(() => {
    props.socket.on("refresh_players", (list) => {
      console.log(list);
      setPlayers(list);
    });
    props.socket.on("game_started", () => {
      console.log("Game started ...");
      props.setDisplay("GamePage");
    });

    return () => {
      props.socket.removeAllListeners();
    };

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
  let sliders = null;
  if (props.room.players && props.room.players[0].id === props.playerId) {
    btnStart = (
      <button className="btn btn-success" onClick={startGame}>
        Commencer la partie
      </button>
    );

    sliders = (
      <div className="">
        <Slider
          min={2}
          max={15}
          step={1}
          value={nbRounds}
          caption="Nombre de rounds"
          suffix=""
          onChange={(v) => setRounds(v)}
        />
        <Slider
          min={0}
          max={100}
          step={0.1}
          value={probaEvent}
          caption="Probabilité d'un évènement"
          suffix="%"
          onChange={(v) => setProba(v)}
        />
      </div>
    );
  }

  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-center justify-center gap-20 align-middle">
      <div className="grid">
        <p className="text-center text-neutral">Salon</p>
        <h1 className="text-6xl font-bold text-error">{props.room.roomCode}</h1>
      </div>
      <LobbyPlayerList players={players} />
      {sliders}
      {btnStart}
      <div className="flex flex-col gap-3">
        <button className="btn btn-link" onClick={back}>
          Retour
        </button>
      </div>
    </div>
  );
}
