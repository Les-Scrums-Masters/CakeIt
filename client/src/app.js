import io from "socket.io-client";
import React from "react";
import Homepage from "./home/homepage";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    
    <Homepage />

  );
}

export default App;
