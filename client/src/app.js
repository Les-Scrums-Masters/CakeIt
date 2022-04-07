import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import HomePage from "./home/homePage";
import RoomLobby from "./lobby/roomLobby";
import GamePage from "./game/gamePage";

// const socket = io.connect("http://localhost:3001");
const socket = io.connect("http://192.168.1.82:3001");

function App() {
  //Possible display : HomePage, RoomLobby, GamePage
  const [display, setDisplay] = useState("HomePage");
  const [room, setRoom] = useState({});
  const [playerId, setPlayerId] = useState(0);

  useEffect(() => {
    socket.on("room_joined", (room, playerId) => {
      //Il a rejoint une room
      setRoom(room);
      setPlayerId(playerId);
      console.log("Room joined as id : " + playerId);
      setDisplay("RoomLobby");
    });
    socket.on("game_started", (room) => {
      //Il a rejoint une room
      setDisplay("GamePage");
    });
  });

  let content;
  if (display === "RoomLobby") {
    content = (
      <RoomLobby
        socket={socket}
        room={room}
        playerId={playerId}
        setDisplay={setDisplay}
      />
    );
  } else if (display === "GamePage") {
    content = <GamePage socket={socket} room={room} playerId={playerId} />;
  } else {
    content = <HomePage socket={socket} />;
  }

  return (
    <main className="flex h-full w-full flex-col overflow-hidden overscroll-none">
      <h1 className="absolute top-10 left-10 text-left text-4xl font-bold text-error">
        Cake It !
      </h1>

      {content}

      <footer className="absolute right-5 bottom-5 ">
        <a>Les Scrum Masters © 2022</a>
      </footer>
    </main>
  );
}

export default App;
