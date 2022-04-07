import EvolutionBadge from "./evolutionBadge";

export default function ValueDisplay(props) {
  let suffix = props.suffix ?? "";

  return (
    <div className="flex grow flex-col">
      <p>
        <span className="text-3xl font-semibold">{props.value + suffix}</span>{" "}
        <EvolutionBadge value={props.evolution} />
      </p>
      <p className="text-sm leading-4">{props.legend}</p>
    </div>
  );
}
