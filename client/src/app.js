import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import HomePage from "./home/homePage";
import RoomLobby from "./lobby/roomLobby";
import GamePage from "./game/gamePage";
import Modal from "./components/modal";

//musique
import MusicSound from "./components/musicSound";
// Sons
import useSound from "use-sound";
import musicSound from "./sounds/lofi.ogg";
import EndPage from "./end/endPage";

const socket = io.connect(REACT_APP_API_ADDRESS);

function App() {
  //Possible display : HomePage, RoomLobby, GamePage, EndPage
  const [display, setDisplay] = useState("HomePage");
  const [room, setRoom] = useState({});
  const [playerId, setPlayerId] = useState(0);

  // ------- Boite de dialogue  -------
  const [modalEmoji, setModalEmoji] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [buttons, setButtons] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // ------- Musique -------

  const [initializedSound, setInitializedSound] = useState(false);
  const [, { sound }] = useSound(musicSound, {
    volume: 0.05,
    interrupt: false,
  });

  //Si l'utilisateur est connecté ou pas
  useEffect(() => {
    // LANCER LA MUSIQUE LORSQU'ELLE EST ACTUALISEE
    if (sound !== null && !initializedSound) {
      // LANCER LA MUSIQUE
      setInitializedSound(true);
      sound.loop(true);
      sound.fade(0, 0.1, 1000);
      sound.play();
    }
  }, [sound, initializedSound]);

  const closeModal = () => setModalOpen(false);

  const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const makeDate = (round) => {
    let increment = round ?? 0;

    let initialDate = Date.now();
    let result = new Date(initialDate);
    result.setDate(result.getDate() + increment);

    // FORMATTAGE
    return dateFormatter.format(result);
  };

  let showNewsModal = (news) => {
    setModalEmoji(String.fromCodePoint(0x1f4f0));
    setModalTitle(news?.name);
    setModalContent(
      <div className="grid gap-3">
        <p className="mb-3 italic">{makeDate(news?.date)}</p>
        <p className="">{news?.description}</p>
      </div>
    );

    setButtons(
      <button
        onClick={() => setModalOpen(false)}
        className="btn btn-success btn-block my-3"
      >
        J'ai compris !
      </button>
    );
    setModalOpen(true);
  };

  let openTutorial = () => {
    setModalEmoji(String.fromCodePoint(0x2139));
    setModalTitle("Tutoriel");
    setModalContent(
      <div className="grid gap-3">
        <p>
          Entrez dans la peau d’un boulanger et gérez au mieux votre boulangerie
          afin de faire un maximum de profit.
          <br />
          <br />
          Tout d’abord, créez une partie, entrez votre nom, et partagez le code
          de la partie avec vos amis afin qu'ils deviennent vos concurrents.
          <br />
          <br />
          Vous avez la possibilité de régler le nombre de tours et le taux de
          chance d'apparition d'un événement chaque jour. <br />
          <br />
          Vous pouvez voir les informations liées à votre production. Certains
          jours, des actualités surviennent et tous les jours vous avez le choix
          de modifier le prix et la quantité de production pour le lendemain.
          <br />
          <br />
          Afin d’ajuster votre production, vous pouvez vous appuyer sur les
          données des concurrents et sur les ventes de la veille.
        </p>
      </div>
    );

    setButtons(
      <button
        onClick={() => setModalOpen(false)}
        className="btn btn-success btn-block my-3"
      >
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
      setRoom(room);
      setDisplay("GamePage");
    });
    socket.on("end_game", (room) => {
      //Il a rejoint une room
      setRoom(room);
      setDisplay("EndPage");
    });
  });

  function back() {
    socket.emit("leave_room", room.roomCode, playerId);
    setDisplay("HomePage");
  }

  let content;
  let logo = (
    <button
      className="btn btn-link absolute left-10 top-5 capitalize"
      onClick={back}
    >
      <h1 className="text-left text-2xl font-bold text-error">Cake It !</h1>
    </button>
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
        makeDate={makeDate}
      />
    );
  } else if (display === "EndPage") {
    content = (
      <EndPage
        socket={socket}
        room={room}
        playerId={playerId}
        setDisplay={setDisplay}
      />
    );
  } else {
    content = <HomePage socket={socket} openTutorial={openTutorial} />;
    logo = null;
  }

  return (
    <main className="flex h-full w-full flex-col overflow-hidden overscroll-none">
      {logo}

      {sound !== null ? (
        <MusicSound sound={sound} additionnalStyle="absolute right-10 top-5" />
      ) : (
        ""
      )}

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
