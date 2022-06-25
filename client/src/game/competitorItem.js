import Avatar from "./../components/avatar";

export default function CompetitorItem(props) {
  let price = 0;
  let money = 0;

  if (props.player.money.values.length > 0)
    money = props.player.money.values[props.player.money.values.length - 1];
  if (props.player.price.values.length > 0)
    price = props.player.price.values[props.player.price.values.length - 1];

  let truncPrice = Number(price?.toFixed(2));
  let truncMoney = Number(money?.toFixed(2));

  return (
    <article className="align-center flex flex-row items-center gap-3 px-5 pt-4 pb-2">
      <Avatar className="mask mask-circle w-8" />

      <div className="flex grow flex-col">
        <p className="align-text-bottom ">
          <span className="text-md font-bold text-error">
            {props.player.name + " "}
          </span>
          {props.player.ready ? (
            <span class="ml-1 rounded-md bg-green-300 px-2 py-1 text-xs font-light uppercase text-green-700">
              PRÊT
            </span>
          ) : (
            ""
          )}
        </p>
        <p className="text-sm font-light">{"Prix de vente : " + truncPrice}€</p>
        <p className="text-sm font-light">{"Trésorerie : " + truncMoney}€</p>
      </div>
    </article>
  );
}
