import Avatar from "./../components/avatar";

export default function LobbyPlayerItem(props) {
  return (
    <article className="grid justify-center text-center">
      <Avatar className="mask mask-circle w-20" />
      <h4 className="text-lg font-bold">{props.name}</h4>
    </article>
  );
}
