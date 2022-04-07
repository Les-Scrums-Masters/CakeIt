import io from "socket.io-client";
import React from "react";
import Homepage from "./home/homepage";
import RoomLobby from "./lobby/roomLobby";
import GamePage from "./game/game";

const socket = io.connect("http://localhost:3001");

function App() {
  // return <Homepage socket={socket} />;
  return <GamePage />
}

export default App;
