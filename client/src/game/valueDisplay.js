import EvolutionBadge from "./evolutionBadge";

export default function ValueDisplay(props) {
  let suffix = props.suffix ?? "";

  let truncValue = Number(props.value?.toFixed(2));

  return (
    <div className="flex grow flex-col">
      <p>
        <span className="text-xl font-semibold">{truncValue + suffix}</span>{" "}
        <EvolutionBadge value={props.evolution} />
      </p>
      <p className="text-sm leading-4">{props.legend}</p>
    </div>
  );
}
