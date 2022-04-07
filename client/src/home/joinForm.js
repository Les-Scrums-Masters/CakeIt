import React, { useRef, useState, useEffect } from "react";

export default function JoinForm(props) {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [joinMode, setJoinMode] = useState("");

  function createGame() {
    alert("Creer une partie");
    props.socket.emit("create_room", name);
  }

  function joinGame() {
    if (joinMode) {
      // REJOINDRE UNE PARTIE
      alert("Rejoindre une partie");
      props.socket.emit("join_room", roomCode);
    } else {
      setJoinMode(true);
    }
  }

  useEffect(() => {
    props.socket.on("room_joined", (room) => {
      //Il a rejoint une room
    });
    props.socket.on("not_find_room", () => {
      //La room n'existe pas
    });
  }, [props.socket]);

  let content, button;
  if (joinMode) {
    content = (
      <div>
        <input
          placeholder="Entrez un code partie"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          type="text"
          className="input input-bordered input-error bg-white"
        />
      </div>
    );
    button = (
      <button className="btn btn-link" onClick={() => setJoinMode(false)}>
        Retour
      </button>
    );
  } else {
    content = (
      <div className="flex flex-col gap-3 align-middle">
        <input
          placeholder="Entrez votre pseudo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="input input-bordered bg-white"
        />
        <button className="btn btn-primary" onClick={createGame}>
          Créer une partie
        </button>
      </div>
    );
    button = "";
  }

  return (
    <div className="align-center flex flex-col justify-center gap-3">
      {content}

      <button className="btn btn-secondary" onClick={joinGame}>
        Rejoindre une partie
      </button>

      {button}
    </div>
  );
}
