import io from "socket.io-client";
import React from "react";
import Homepage from "./home/homepage";
import RoomLobby from "./lobby/roomLobby";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    // <Homepage />
    <RoomLobby roomCode={1234} name="test" socket={socket} />
  );
}

export default App;
