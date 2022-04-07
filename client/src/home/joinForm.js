import React, { useState } from "react";

export default function JoinForm(props) {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [joinMode, setJoinMode] = useState("");

  function createGame() {
    alert("Creer une partie");
  }

  function joinGame() {
    if (joinMode) {
      // REJOINDRE UNE PARTIE
      alert("Rejoindre une partie");
    } else {
      setJoinMode(true);
    }
  }

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
