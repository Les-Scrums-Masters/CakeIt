import React, { useState, useEffect } from "react";

export default function JoinForm(props) {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("0000");
  const [joinMode, setJoinMode] = useState(false);

  function createGame() {
    if (name !== "") {
      props.socket.emit("create_room", name);
    } else {
      //Avertissement qu'il n'a pas de nom
    }
  }

  function joinGame() {
    if (joinMode) {
      // REJOINDRE UNE PARTIE
      if (name !== "") {
        props.socket.emit("join_room", roomCode, name);
      } else {
        //Avertissement qu'il n'a pas de nom
      }
    } else {
      setJoinMode(true);
    }
  }

  useEffect(() => {
    props.socket.on("room_joined", (room) => {
      //Il a rejoint une room
      setRoomCode(room);
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
          className="input input-bordered input-error bg-white text-center"
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
      <button className="btn btn-primary" onClick={createGame}>
        Créer une partie
      </button>
    );
    button = "";
  }

  return (
    <div className="align-center flex flex-col justify-center gap-3">
      
      <input
          placeholder="Entrez votre pseudo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="input input-bordered bg-white text-center"
        />
      
      {content}

      <button className="btn btn-secondary" onClick={joinGame}>
        Rejoindre une partie
      </button>

      {button}
    </div>
  );
}
