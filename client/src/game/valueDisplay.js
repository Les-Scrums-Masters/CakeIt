export default function ValueDisplay(props) {
  return (
    <div className="grow flex flex-col">

      <p className="text-3xl font-light">{props.value}</p>
      <p className="text-sm">{props.legend}</p>

    </div>
  );
}
