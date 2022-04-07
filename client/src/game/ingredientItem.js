import EvolutionBadge from "./evolutionBadge";

export default function IngredientItem(props) {
  return (
    <div className="flex items-center gap-3 px-3 pt-3 align-middle">
      <img
        src={"../images/" + props.image + ".png"}
        className="h-8 w-8"
        alt={props.name}
      />

      <p className="grow">
        <span className="text-xl font-bold text-accent">
          {props.price + " €"}
        </span>{" "}
        <EvolutionBadge value={props.evolution} />
      </p>
    </div>
  );
}
