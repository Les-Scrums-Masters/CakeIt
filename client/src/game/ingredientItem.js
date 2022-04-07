import EvolutionBadge from "./evolutionBadge";

export default function IngredientItem(props) {
  return (
    <div className="flex flex-col items-center gap-3 py-2 align-middle">
      <img
        src={"../images/" + props.image + ".png"}
        className="w-14"
        alt={props.name}
      />

      <p>
        <span className="text-xl font-bold">{props.price}</span>{" "}
        <EvolutionBadge value={props.evolution} />
      </p>
    </div>
  );
}
