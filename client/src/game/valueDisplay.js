export default function ValueDisplay(props) {
  let suffix = props.suffix ?? "";

  return (
    <div className="flex grow flex-col">
      <p>
        <span className="text-3xl font-semibold">{props.value + suffix}</span>{" "}
        <span className="text-base font-light italic">
          {props.evolution + " %"}
        </span>
      </p>
      <p className="text-sm leading-4">{props.legend}</p>
    </div>
  );
}
