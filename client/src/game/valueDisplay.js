export default function ValueDisplay(props) {
  let suffix = props.suffix ?? "";

  return (
    <div className="flex grow flex-col">
      <p className="text-3xl font-light">{props.value + suffix}</p>
      <p className="text-sm">{props.legend}</p>
    </div>
  );
}
