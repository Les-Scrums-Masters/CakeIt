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

   // ------- Boite de dialogue  -------
   const [modalEmoji, setModalEmoji] = useState("");
   const [modalTitle, setModalTitle] = useState("");
   const [modalContent, setModalContent] = useState(null);
   const [buttons, setButtons] = useState(null);
   const [modalOpen, setModalOpen] = useState(false);
 
   // Fonction de fermeture de la boite de dialogue
   const closeModal = () => setModalOpen(false);
 
   let showNewsModal = (news) => {
     setModalEmoji( String.fromCodePoint(0x2139) );
     setModalTitle("Nouvelle actualité !");
     setModalContent(
       <div className="">
         <p>{news.date}</p>
         <h3>{news.name}</h3>
         <p>
           {news.description}
         </p>
       </div>
     )
 
     setButtons(
       <button onClick={() => setModalOpen(false)} className="btn btn-success">
         J'ai compris !
       </button>
     )
     setModalOpen(true);
   }

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
    return <GamePage socket={socket} room={room} playerId={playerId}/>;
  } else {
    return <HomePage socket={socket} />;
  }
}

export default App;
