import Avatar from "./../components/avatar";

export default function PlayerCard(props) {
  let money = props.player.money.values[props.player.money.values.length - 1];
  return (
    <article className="grid justify-center rounded-xl border-[3px] border-error py-5 px-5 text-center align-middle">
      <Avatar className="mask mask-circle w-20" />
      {console.log()}
      <h3 className="text-lg font-bold">{props.player.name}</h3>
      <p className="text-lg">{money}€</p>
    </article>
  );
}
