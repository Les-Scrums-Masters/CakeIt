export default function EvolutionBadge(props) {
  let color = (props.value ?? 0) > 0 ? "-success" : "-error";

  let bgColor = "bg" + color;

  let truncValue = Number(props.value.toFixed(2));

  return (
    <span
      className={
        "ml-1 rounded-lg px-2 py-1 align-text-bottom text-sm text-white " +
        bgColor
      }
    >
      {truncValue + " %"}
    </span>
  );
}
