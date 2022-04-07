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

  if (display === "RoomLobby") {
    return (
      <RoomLobby
        socket={socket}
        room={room}
        playerId={playerId}
        setDisplay={setDisplay}
      />
    );
  } else if (display === "GamePage") {
    return <GamePage socket={socket} />;
  } else {
    return <HomePage socket={socket} />;
  }
}

export default App;
