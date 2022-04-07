import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import HomePage from "./home/homePage";
import RoomLobby from "./lobby/roomLobby";
import GamePage from "./game/gamePage";
import Modal from "./components/modal";

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

  const closeModal = () => setModalOpen(false);

  let showNewsModal = (news) => {
    setModalEmoji(String.fromCodePoint(0x2139));
    setModalTitle("Nouvelle actualité !");
    setModalContent(
      <div className="">
        <p>{news.date}</p>
        <h3>{news.name}</h3>
        <p>{news.description}</p>
      </div>
    );

    setButtons(
      <button onClick={() => setModalOpen(false)} className="btn btn-success">
        J'ai compris !
      </button>
    );
    setModalOpen(true);
  };

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
  let logo = (
    <h1 className="absolute left-40 top-5 text-left text-2xl font-bold text-error">
      Cake It !
    </h1>
  );
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
    content = (
      <GamePage
        socket={socket}
        room={room}
        playerId={playerId}
        showNews={showNewsModal}
      />
    );
  } else {
    content = <HomePage socket={socket} />;
    logo = null;
  }

  return (
    <main className="flex h-full w-full flex-col overflow-hidden overscroll-none">
      {logo}

      <Modal
        open={modalOpen}
        emoji={modalEmoji}
        title={modalTitle}
        buttons={buttons}
        onClose={closeModal}
      >
        {modalContent}
      </Modal>

      {content}

      <footer className="absolute right-5 bottom-5 ">
        <a
          href="https://git.unistra.fr/les-scrums-masters/pec22-t4-a"
          target="_blank"
          rel={"noreferrer"}
        >
          Les Scrum Masters © 2022
        </a>
      </footer>
    </main>
  );
}

export default App;
