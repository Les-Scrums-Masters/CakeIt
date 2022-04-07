import io from "socket.io-client";
import React, { useRef, useState, useEffect } from "react";
import Homepage from "./home/homepage";
import RoomLobby from "./lobby/roomLobby";
import GamePage from "./lobby/game";

const socket = io.connect("http://localhost:3001");

function App() {
  //Possible display : HomePage, RoomLobby, GamePage
  const [display, setDisplay] = useState("HomePage");

  useEffect(() => {
    socket.on("room_joined", (room) => {
      //Il a rejoint une room
      setDisplay("RoomLobby");
    });
    socket.on("game_started", (room) => {
      //Il a rejoint une room
      setDisplay("GamePage");
    });
  }, [socket]);

  if (display === "RoomLobby") {
    return <RoomLobby socket={socket} />;
  } else if (display === "GamePage") {
    return <GamePage socket={socket} />;
  } else {
    return <Homepage socket={socket} />;
  }
}

export default App;
