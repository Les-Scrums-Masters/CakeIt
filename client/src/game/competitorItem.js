import Avatar from "./../components/avatar";

export default function CompetitorItem(props) {
  return (
    <article className="align-center flex flex-row items-center gap-3 px-5 pt-4 pb-2">
      <Avatar className="mask mask-circle w-8" />

      <div className="flex grow flex-col">
        <p className="align-text-bottom">
          <span className="text-md font-bold text-error">
            {props.name + " "}
          </span>
          <span className="text-sm font-light italic text-gray-400">
            {props.status}
          </span>
        </p>
        <p className="text-sm font-light">{"Prix de vente : " + props.price}</p>
        <p className="text-sm font-light">{"Trésorerie : " + props.money}</p>
      </div>
    </article>
  );
}
