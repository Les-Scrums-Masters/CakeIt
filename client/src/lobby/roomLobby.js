import React, { useState } from "react";

export default function RoomLobby(props) {
  function startGame() {
    alert("Commencer la partie");
  }

  let content, button;
  content = (
    <div className="bg-grey justify justif container mx-auto flex h-full w-full flex-col items-center justify-center gap-5 align-middle">
      <p className="max-w-lg text-center">Salon</p>
      <h1 className="text-center text-6xl font-bold text-error">
        {props.roomCode}
      </h1>
    </div>
  );
  var players = ["Franck", "Eren", "Clément", "Derya"];
  return (
    <div className="carousel-center carousel rounded-box max-w-md space-x-4 bg-neutral p-4">
      <div className="carousel-center carousel rounded-box max-w-md space-x-4 bg-neutral p-4">
        {players?.map((player, index) => {
          return (
            <div className="carousel-item">
              <img
                className="mask mask-circle"
                src="https://api.lorem.space/image/shoes?w=160&h=160"
                alt="Avatar"
              />
              <p className="max-w-lg text-center">{props.name}</p>
            </div>
          );
        })}
      </div>
      <button className="btn btn-primary" onClick={startGame}>
        Commencer une partie
      </button>
      {button}
    </div>
  );
}
