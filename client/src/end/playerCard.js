import Avatar from "./../components/avatar";

export default function PlayerCard(props) {
  return (
    <article className="grid justify-center text-center">
      <Avatar className="mask mask-circle w-20" />
      <h4 className="text-lg font-bold">{props.player.name}</h4>
      <h4 className="text-lg font-bold">{props.player.money}</h4>
    </article>
  );
}
