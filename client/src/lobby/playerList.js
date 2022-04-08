import LobbyPlayerItem from "./playerItem";

export default function LobbyPlayerList(props) {
  return (
    <div className="align-center flex flex-wrap items-center gap-16">
      {props.players.map((item, index) => (
        <LobbyPlayerItem name={item.name} key={index} />
      ))}
    </div>
  );
}
