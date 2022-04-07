import io from "socket.io-client";
import React from "react";
import Homepage from "./home/homepage";
import RoomLobby from "./lobby/roomLobby";
import Chart from "./charts/chart.js";

const socket = io.connect("http://localhost:3001");

function App() {
  return <Chart />;
}

export default App;
