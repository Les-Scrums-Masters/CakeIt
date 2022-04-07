import React, { useState, useEffect } from "react";

export default function JoinForm(props) {
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("0000");
  const [joinMode, setJoinMode] = useState(true);
  const [selected, setSelected] = useState(false);

  function createGame() {
    if (!selected) {
      setSelected(true);
      setJoinMode(false);
    } else {
      if (name !== "") {
        props.socket.emit("create_room", name);
      } else {
        //Avertissement qu'il n'a pas de nom
      }
    }
  }

  function joinGame() {
    if (!selected) {
      setSelected(true);
      setJoinMode(true);
    } else {
      if (name !== "") {
        props.socket.emit("join_room", roomCode, name);
      } else {
        //Avertissement qu'il n'a pas de nom
      }
    }
  }

  function back() {
    setSelected(false);
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

  let buttons = [
    <button className="btn btn-primary" onClick={createGame} key="create">
      Créer une partie
    </button>,
    <button className="btn btn-secondary" onClick={joinGame} key="join">
      Rejoindre une partie
    </button>,
  ];

  let content;

  let nameInput = (
    <input
      placeholder="Entrez votre pseudo"
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      className="input input-bordered bg-white text-center text-xl"
      key="name"
    />
  );

  let backButton = (
    <button className="btn btn-link" onClick={back} key="back">
      Retour
    </button>
  );

  if (selected) {
    if (joinMode) {
      content = [
        nameInput,
        <input
          placeholder="Entrez un code partie"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          type="text"
          className="input input-bordered input-error bg-white text-center text-xl"
          key="code"
        />,
        buttons[1],
        backButton,
      ];
    } else {
      content = [nameInput, buttons[0], backButton];
    }
  } else {
    content = buttons;
  }

  return (
    <div className="align-center flex flex-col justify-center gap-3">
      {content}
    </div>
  );
}
