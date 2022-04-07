import { useState } from "react";

export default function BakerInfo(props) {
  return (
    <article className="align-center flex flex-row items-center gap-3 rounded-xl bg-success p-8 text-white">
      <img
        className="mask mask-circle w-20"
        src="https://api.lorem.space/image/shoes?w=160&h=160"
        alt="Avatar"
      />

      <div className="flex grow flex-col">
        <h6 className="font-light">{props.date}</h6>
        <h2 className="text-3xl font-bold">{props.player.name}</h2>
      </div>

      <div className="flex flex-col justify-end text-right">
        <p className="text-sm font-light">trésorerie</p>
        <p className="text-3xl font-light">
          {props.player.money.values[props.player.money.values.length - 1] +
            " €"}
        </p>
      </div>
    </article>
  );
}
