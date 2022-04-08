export default function EvolutionBadge(props) {
  let isInverted = props.invert ?? false;

  let isSuccess = isInverted ? (props.value ?? 0) < 0 : (props.value ?? 0) > 0;

  let color = isSuccess ? "-success" : "-error";

  let bgColor = "bg" + color;

  let truncValue = Number(props.value.toFixed(2));

  if (truncValue > 0) truncValue = "+ " + truncValue;

  if (truncValue === 0) {
    return "";
  } else {
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
}
