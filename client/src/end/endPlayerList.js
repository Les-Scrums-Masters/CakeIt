import PlayerCard from "./playerCard";

export default function EndPlayerList(props) {
  return (
    <div className="align-center flex flex-wrap items-center gap-16">
      {props.players.map((player, index) => (
        <PlayerCard player={player} key={index} />
      ))}
    </div>
  );
}
